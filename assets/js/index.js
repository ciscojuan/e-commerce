'use strict';

const btnLog = document.querySelector('.btn-login');
const btnLogin = document.querySelector('[data-login]')
const btnLogOut = document.querySelector('[data-logout]')
const addProduct = document.querySelector('.btn-add')
console.log(btnLogOut)

if(localStorage.getItem('adminToken')){
  btnLogin.style.display = 'none';
  btnLogOut.style.display = 'block';
  addProduct.style.display = 'block';
}

btnLogOut.addEventListener('click', () => {
  localStorage.removeItem('adminToken');
  window.location('/index.html')
})

btnLog.addEventListener('click', () => {
  const username = document.querySelector('[data-username]').value;
  const passwd = document.querySelector('[data-password]').value;
  console.log(username, passwd);

  if (username === 'admin' && passwd === 'admin') {
    localStorage.setItem('adminToken', true);
    window.location.href = '../../index.html'; // redirigir a la página de administrador
  }

});
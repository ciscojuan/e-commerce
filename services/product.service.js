"use strict";
const jsonurl = 'https://raw.githubusercontent.com/ciscojuan/e-commerce/main/assets/product.json';
const urlSearchParams = new URLSearchParams(window.location.search);
const id = urlSearchParams.get("id");
const category = urlSearchParams.get('category');



const getProducts = () =>
  fetch(jsonurl).then((res) => res.json());



//getMouses

const getLaptop = () =>
  fetch("https://raw.githubusercontent.com/ciscojuan/e-commerce/main/assets/product.json?category_like=LAPTOP").then((res) =>
    res.json()
  );

//getKeyboars
const getKeyboards = () =>
  fetch(`${jsonurl}?category_like=TECLADO`).then((res) =>
    res.json()
  );

//getMonitor

const getMonitor = () =>
  fetch(`${jsonurl}?category_like=MONITOR`).then((res) =>
    res.json()
  );

//getMouses
const getMouse = () =>
  fetch(`${jsonurl}?category_like=MOUSE`).then((res) =>
    res.json()
  );

  //getProduct
const getProduct = () =>
  fetch(`${jsonurl}/ + id`).then((res) => res.json())



//getProductsRealted
const getProductRelated = () => 
  fetch(`${jsonurl}?category_like=${category}`).then(res => res.json()).catch(err => console.log(err))
      
//addProduct
const addProduct = (thumbnail, category, name,  price, description) =>{
  return fetch(`http://localhost:3001/products`,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({  thumbnail, category, name, price, description, id : uuid.v4() }),
  });
}

/* deleteProduct */
const deleteProduct = (id) =>{
  return fetch(`http://localhost:3001/products/${id}`,{
    method: 'DELETE',
  })
}
export const productServices = {
  getProducts,
  getKeyboards,
  getLaptop,
  getMonitor,
  getMouse,
  getProduct,
  getProductRelated,
  addProduct,
  deleteProduct,
};

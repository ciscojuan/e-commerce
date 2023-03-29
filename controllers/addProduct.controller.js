'use strict'
import { productServices } from "../services/product.service.js";
const form = document.querySelector('[data-form]')

form.addEventListener('submit', (e) => {
 e.preventDefault(); 
 const thumbnail = document.querySelector('[data-thumbnail]').value
 const category = document.querySelector('[data-category]').value
 const name= document.querySelector('[data-name]').value
 const price = document.querySelector('[data-price]').value
 const description =document.querySelector('[data-description]').value

    productServices
    .addProduct(thumbnail, category, name, price, description)
       .then((res) =>{
    
           Swal.fire(
           'Good job!',
           'Product creat Sucessfuly!',
           'success'
           )

           window.location.href = '../index.html'
       }).catch(err => console.log(err))

})

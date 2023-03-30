"use strict";

const urlSearchParams = new URLSearchParams(window.location.search);
const id = urlSearchParams.get("id");
const category = urlSearchParams.get('category');



const getProducts = () =>
  fetch("http://localhost:3001/products").then((res) => res.json());



//getMouses

const getLaptop = () =>
  fetch("https://raw.githubusercontent.com/ciscojuan/e-commerce/main/assets/product.json?category_like=LAPTOP").then((res) =>
    res.json()
  );

//getKeyboars
const getKeyboards = () =>
  fetch("http://localhost:3001/products?category_like=TECLADO").then((res) =>
    res.json()
  );

//getMonitor

const getMonitor = () =>
  fetch("http://localhost:3001/products?category_like=MONITOR").then((res) =>
    res.json()
  );

//getMouses
const getMouse = () =>
  fetch("http://localhost:3001/products?category_like=MOUSE").then((res) =>
    res.json()
  );

  //getProduct
const getProduct = () =>
  fetch("http://localhost:3001/products/" + id).then((res) => res.json())



//getProductsRealted
const getProductRelated = () => 
  fetch("http://localhost:3001/products?category_like="+ category).then(res => res.json()).catch(err => console.log(err))
      
//addProduct
const addProduct = (thumbnail, category, name,  price, description) =>{
  return fetch('http://localhost:3001/products',{
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

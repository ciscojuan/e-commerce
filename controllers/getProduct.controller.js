"use strict";
import { productServices } from "../services/product.service.js";

const containerProduct = document.querySelector('[data-product]')
const containerRelated = document.querySelector('[data-related]');

const urlSearchParams = new URLSearchParams(window.location.search);
const search = urlSearchParams.get("search");

const newProductRelated = (name, thumbnail, price,category, id) => {
  const card = document.createElement("div");
  const content = `
            <div class="product">
                <div class="product__container--thumbnail">
                  <img src="${thumbnail}" alt="${name}" class="product__thumbnail"></img>
                </div>
                <div class="product__details">
                    <h4 >${name}</h4>
                    <h5 >${price}</h5>
                    <p class="btn-showProduct"><a href="getProduct.html?id=${id}&category=${category}" class="anchor" data-id>Ver Producto</a></p>
                </div>
            </div>`;
  card.innerHTML = content;
  card.dataset.id;

  return card;
};

const newProduct = (name, thumbnail, description, price, category, id) => {
  const content = `
                <h1 class="product__container--title">${name}</h1>
                <div class="product__container--body">
                    <div class="product-image">
                        <img src="${thumbnail}" alt="${name}">
                    </div>
                    <div class="product-description">
                        <h1>Descripcion:</h1>
                        <p>${description}</p>
                        <p>Producto:  ${id}</p>
                        <p>Categoria:  ${category}</p>
                        <p>${price}</p>
                    </div>
                </div>`;
  return content;
};

productServices.getProduct().then((product) => {
  const newProducto = newProduct(
    product.name,
    product.thumbnail,
    product.description,
    product.price,
    product.category,
    product.id
  );
  containerProduct.innerHTML = newProducto;
});

productServices.getProductRelated().then((data) => {
  data.forEach((product) => {
    const newProducto = newProductRelated(
      product.name,
      product.thumbnail,
      product.price,
      product.category,
      product.id
    );
    containerRelated.appendChild(newProducto);
  });
});


productServices.getProductSearch(search).then((data) =>{
  console.log(search)
  search.toLowerCase();

  var productos = data.filter((item) =>
        item.nombre.toLowerCase().includes(search)
    );
    productos.sort((a, b) => a.precio - b.precio);

    if (productos.length > 0) {
        resultado.innerHTML = "";
        for (var producto of productos) {
            resultado.innerHTML += `${producto.name}, $ ${producto.proce}<br>`;
        }
    } else {
        resultado.innerHTML = `No hay resultados con ${search}`;
    }

    containerProduct.innerHTML = newProducto;
})
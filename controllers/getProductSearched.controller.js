"use strict";
import { productServices } from "../services/product.service.js";

var input = document.querySelector("[data-string]");
var resultado = document.querySelector("[data-search]");

var data;
fetch("http://localhost:3001/products")
  .then((response) => response.json())
  .then((json) => (data = json));

input.addEventListener("keyup", () => {
  var value = input.value.toLowerCase();
  console.log(value);
  var productos = data.filter((item) =>
    item.name.toLowerCase().includes(value)
  );
  productos.sort((a, b) => a.precio - b.precio);

  if (productos.length > 0) {
    resultado.innerHTML = "";
    for (var producto of productos) {
      resultado.innerHTML += `
            <div class="product">
                <div class="product__container--thumbnail">
                  <img src="${producto.thumbnail}" alt="${producto.name}" class="product__thumbnail"></img>
                </div>
                <div class="product__details">
                    <h4 >${producto.name}</h4>
                    <h5 >${producto.price}</h5>
                    <p class="btn-showProduct"><a href="/views/getProduct.html?id=${producto.id}&category=${producto.category}" class="anchor" data-id>Ver Producto</a></p>
                </div>
            </div>
            `;
    }

    var elements = document.getElementsByClassName("b");
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.display = "none";
    }
  } else {
    resultado.innerHTML = `No hay resultados con ${value}`;
  }
});

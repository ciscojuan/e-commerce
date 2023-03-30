"use strict";
import { productServices } from "../services/product.service.js";

const containerKeyboard = document.querySelector("[data-keyboard]");
const containerLaptop = document.querySelector("[data-laptop]");
const containerMonitor = document.querySelector("[data-monitor]");
const containerMouse = document.querySelector("[data-mouse]");

const newProduct = (name, thumbnail, price, id, category) => {
  const card = document.createElement("div");
  const content = `
            <div class="product">
                <div class="product__container--thumbnail">
                  <img src="${thumbnail}" alt="${name}" class="product__thumbnail"></img>
                </div>
                <div class="product__details">
                    <h4 >${name}</h4>
                    <h5 >${price}</h5>
                    <p class="btn-showProduct"><a href="views/getProduct.html?id=${id}&category=${category}" class="anchor" data-id>Ver Producto</a></p>
                </div>
            </div>`;
  card.innerHTML = content;
  card.dataset.id;

  return card;
}

productServices.getKeyboards().then((data) => {
  data.forEach((product) => {
    const newProducto = newProduct(
      product.name,   
      product.thumbnail,
      product.price,
      product.id,
      product.category
    );
    containerKeyboard.appendChild(newProducto);
    document.querySelector(".loading").style.display = "none";
  });
});

productServices.getLaptop().then((data) => {
  data.forEach((product) => {
    const newProducto = newProduct(
      product.name,
      product.thumbnail,
      product.price,
      product.id,
      product.category
    );
    containerLaptop.appendChild(newProducto);
    document.querySelector(".loading").style.display = "none";
  });
});

productServices.getMonitor().then((data) => {
  data.forEach((product) => {
    const newProducto = newProduct(
      product.name,
      product.thumbnail,
      product.price,
      product.id,
      product.category
    );
    containerMonitor.appendChild(newProducto);
    document.querySelector(".loading").style.display = "none";
  });
});
productServices.getMouse().then((data) => {
  data.forEach((product) => {
    const newProducto = newProduct(
      product.name,
      product.thumbnail,
      product.price,
      product.id,
      product.category
    );
    containerMouse.appendChild(newProducto);
    document.querySelector(".loading").style.display = "none";
  });
});

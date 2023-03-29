'use strict'
import { productServices } from "../services/product.service.js";
const container = document.querySelector('[data-product]');

const newProduct = (name, thumbnail, price, id, category) => {
  const card = document.createElement("div");
  const content = `
            <div class="product">
              <div class="delete"><i class="fas fa-trash fa-lg" style="color: #7d0808;" id="${id}"></i></div>
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

 
  const trash = card.querySelector('.fas')

  if(localStorage.getItem('adminToken')){
    trash.style.display = 'block'
  }else{
    trash.style.display = 'none'
  }

  trash.addEventListener('click', () =>{
    const id = trash.id
    


    productServices.deleteProduct(id).then((res) => console.log(res)).catch(err => console.log(err))
  })

  return card;
};

productServices.getProducts().then((data) => {
    data.forEach((product) => {
      const newProducto = newProduct(
        product.name,
        product.thumbnail,
        product.price,
        product.id,
        product.category
      );
      container.appendChild(newProducto);
      document.querySelector(".loading").style.display = "none";
    });
  });

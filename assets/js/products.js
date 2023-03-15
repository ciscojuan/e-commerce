'use strict'
"1+privada+publica";
const ts = 1;
const pk = "c13d19c05231a50bcea5c844f09b960e";
const pik = "af4aa873e8f4766178d0e99cdfa80f6a18e7eb46";
const hash = "317049953472af01ff9dd92b48639551";
const apiKey = "c13d19c05231a50bcea5c844f09b960e";

const url = `https://gateway.marvel.com:443/v1/public/comics?limit=6&ts=${ts}&apikey=${apiKey}&hash=${hash}`;
const starWars = document.querySelector('.marvel');
console.log(starWars)
var comics = [];


    fetchData()
    .then(res => res.json())
    .then((items) => {
        console.log(items.data.results)
        getComics (items.data.results) 
    })

function fetchData (){
    return fetch(url)
}

const getComic = () =>{

}

 const getComics = (comics) =>{
    comics.map((comic, i) => {

        let content = ` 
        <div class="product">
            <img src="${comic.thumbnail.path}.${comic.thumbnail.extension}" alt="${comic.title}" class="product__thumbnail"></img>
            <div class="product__details">
                <h4 >${comic.title}</h4>
                <h5 >${comic.prices[0].price}</h5>
                <p class="btn-showProduct"><a href="" class="anchor">Ver Producto</a></p>
            </div>
        </div>`
        starWars.innerHTML += content
        document.querySelector('.loading').style.display = 'none'
    })
} 
import createHTML from "./data/products.js";
console.log(createHTML);

const productContainer = document.querySelector(".products");


productContainer.innerHTML += createHTML;

import data from "./data/products.js";
console.log(data);

const productContainer = document.querySelector(".products");
const button = document.querySelector(".btn");

let productLoop = data;

function renderProducts () {
    productContainer.innerHTML = "";

    productLoop.forEach(function (data) {
        productContainer.innerHTML +=  `<div class="display">
                    <h2>${data.title}</h2>
                    <h3>$${data.price}</h3>
                <div>`    
    });
};

renderProducts();

button.onclick = function () {

    prices.sort(function(a,b,) {
        return a - b;
    })
    renderProducts();
};
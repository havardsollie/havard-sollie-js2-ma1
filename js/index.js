import data from "./data/products.js";

const productContainer = document.querySelector(".products");
const filter = document.querySelector(".search");

let productLoop = data;

function renderProducts () {
    productContainer.innerHTML = "";

    productLoop.forEach(function (display) {
        productContainer.innerHTML +=  `<div class="display">
                    <h2>${display.title}</h2>
                    <h3>${display.price}</h3>
                <div>`
    
    });
};

renderProducts();

filter.onkeyup = function (event) {

    const filterValue = event.target.value.trim().toLowerCase();

    const filteredProducts = data.filter(function (display) {
        if (display.title.toLowerCase().startsWith(filterValue)) {
            return true;
        }
    });

    productLoop = filteredProducts;

    renderProducts();
};
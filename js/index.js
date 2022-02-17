import { getWishlistItems } from "./utilities/wishlistFunctions.js";
import data from "./data/products.js";
console.log(data);

const productContainer = document.querySelector(".products");
const filter = document.querySelector(".search");
const wishlist = getWishlistItems;

let productLoop = data;

function renderProducts () {
    productContainer.innerHTML = "";

    productLoop.forEach(function (data) {
        productContainer.innerHTML +=  `<div class="display">
                    <h2>${data.title}</h2>
                    <h3>$${data.price}</h3>
                    <button class="btn">Add to wishlist</button>
                <div>`
    });
};

renderProducts();


let prices = data.price;

filter.onkeyup = function () {

    const filteredProducts = prices.filter(filterNumbers);
    console.log(filterNumbers)

    function filterNumbers(prices) {
        if(prices > 50) {
            return true;
        }
    };

    productLoop = filteredProducts;

    renderProducts();
};

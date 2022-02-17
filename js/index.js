
import data from "./data/products.js";
console.log(data);

const productContainer = document.querySelector(".products");
const search = document.querySelector(".search");

let productLoop = data;

function renderProducts () {
    productContainer.innerHTML = "";

    productLoop.forEach(function (data) {
        productContainer.innerHTML +=  `<div class="display">
                    <h2>${data.title}</h2>
                    <h3>$${data.price}</h3>
                    <button class="btn">Add to wishlist</button>
                <div>`
                

        let prices = data.price;

        search.onkeyup = function (event) {
        
        const filterValue = event.target.value.trim();

        const filteredProducts = prices.filter(filterNumbers);

        function filterNumbers(prices) {
            if(prices > 50, data.title.toLowerCase().startsWith(filterValue)) {
                return true;
            }
        };

        productLoop = filteredProducts;

        renderProducts();
    };
        });
};

renderProducts();

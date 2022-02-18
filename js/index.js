
import data from "./data/products.js";


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

function sort (productLoop) {
    productContainer.innerHTML = "";
    productLoop.forEach(function(data) {
        productContainer.innerHTML +=  `<div class="display">
                    <h2>${data.title}</h2>
                    <h3>$${data.price}</h3>
                <div>`
    })
}

sort(productLoop);

button.addEventListener("click", function() {

    productLoop.sort(function(a,b) {
        if (a.price > b.price) {
            return -1;
        }
        else if (b.price < a.price) {
            return 1;
        }
        else {
            return 0;
        }
    });
    sort(productLoop);
})




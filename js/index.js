
import data from "./data/products.js";


const productContainer = document.querySelector(".products");
const search = document.querySelector(".search");

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

// var maxPrices = productLoop.filter(function(data) {
//     return data.price > 20;
// })

// console.log(maxPrices);

search.onkeyup = function () {

    const maxPrices = productLoop.sort(function(data) {
        if(productLoop.price < 50) {
            return true;
        }
    });

    console.log(maxPrices);
}


// console.log(maxPrices);

// button.onclick = (function (maxPrices) {

//     maxPrices.filter(function(a,b) {
//         return a - b;
//         console.log(a);
//     });
// });

// renderProducts(maxPrices);



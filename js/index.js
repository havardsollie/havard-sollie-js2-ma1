
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

var maxPrices = productLoop.filter(function(data) {
    return data.price < 50;
})

console.log(maxPrices);


// maxPrices.forEach(function(data) {
//     button.onclick = function() {
//         maxPrices.sort(function(a,b) {
//             return a - b;
//         })
//     }
// })

// console.log(maxPrices);

// button.onclick = (function (maxPrices) {

//     maxPrices.filter(function(a,b) {
//         return a - b;
//         console.log(a);
//     });
// });

// renderProducts(maxPrices);



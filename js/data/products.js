const url = "https://fakestoreapi.com/products";
const productContainer = document.querySelector(".products"); 


    const response = await fetch(url);
    const data = await response.json();
    productContainer.innerHTML = "";


export default data;


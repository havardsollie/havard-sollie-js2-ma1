const url = "https://fakestoreapi.com/products";

async function getData () {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    return data;
}

getData();

export default function createHTML(data) {
    return `<div class="display">
                <h2>${data[0].title}>
                <h3>${data[0].price}>
            <div>`

};
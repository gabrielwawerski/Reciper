let requestUrl = 'https://gabrielwawerski.github.io/Reciper/recipes.json';
let request = new XMLHttpRequest();

request.open('GET', requestUrl);
request.responseType = 'json';
request.send();

request.onload = function() {
    let recipes = request.response;
    console.log(recipes);
};

const PRODUCT_LIST_TABLE = document.getElementById("product-list-table");
const RECIPE_DESCRIPTION = document.getElementById("recipe-description");


const REQUEST_URL = 'https://gabrielwawerski.github.io/Reciper/recipes.json';
let request = new XMLHttpRequest();

request.open('GET', REQUEST_URL);
request.responseType = 'json';
request.send();

request.onload = function () {
    let recipes = request.response;
    console.log(recipes.productList);
};

const PRODUCT_LIST_TABLE = document.getElementById("product-list-table");
const RECIPE_DESCRIPTION = document.getElementById("recipe-description");
const RECIPE_CONTAINER = document.getElementsByClassName("recipe-container");

// const RECIPE_TITLE = RECIPE_CONTAINER.appendChild(document.createElement('recipe'));

// RECIPE_TITLE.innerText = recipes[1].name;


// RECIPE_CONTAINER.append(RECIPE_TITLE);
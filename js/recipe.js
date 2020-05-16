const RECIPE_NAME = document.getElementById('recipe-name');
const RECIPE_IMG = document.getElementById('recipe-img');
const INGREDIENTS_LIST = document.getElementById('ingredients-table');
const RECIPE_LIST = document.getElementById('recipe-instructions-data');

RECIPE_NAME.innerText = localStorage.getItem("name");
RECIPE_IMG.style.backgroundImage = `url(\"../img/${localStorage.getItem("img")}\")`;


let ingredients = localStorage.getItem("productList").split(",");
let recipeInstruction = localStorage.getItem("instructions").split("-");

for (let i = 0; i < ingredients.length; i++) {
    const LIST_ITEM = document.createElement('li');
    // LIST_ITEM.className = "dotted";
    LIST_ITEM.appendChild(document.createTextNode(ingredients[i]));
    INGREDIENTS_LIST.appendChild(LIST_ITEM);
}

for (let i = 0; i < recipeInstruction.length; i++) {
    const LIST_ITEM = document.createElement('li');
    LIST_ITEM.appendChild(document.createTextNode(recipeInstruction[i]));
    RECIPE_LIST.appendChild(LIST_ITEM);
}
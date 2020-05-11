const RECIPE_NAME = document.getElementById('recipe-name');
const RECIPE_IMG = document.getElementById('recipe-img');
const INGREDIENTS_TABLE = document.getElementById('ingredients-table');
const RECIPE_DESCRIPTION = document.getElementById('recipe-description-data');

RECIPE_NAME.innerText = localStorage.getItem("name");
RECIPE_IMG.innerText = localStorage.getItem("img");


let ingredients = localStorage.getItem("productList").split(",");
let recipeDescription = localStorage.getItem("description").split("-");

for (let i = 0; i < ingredients.length; i++) {
    const LIST_ITEM = document.createElement('li');
    LIST_ITEM.appendChild(document.createTextNode(ingredients[i]));
    INGREDIENTS_TABLE.appendChild(LIST_ITEM);
}

for (let i = 0; i < recipeDescription; i++) {
    const LIST_ITEM = document.createElement('li');
    LIST_ITEM.appendChild(document.createTextNode(recipeDescription[i]));
    RECIPE_DESCRIPTION.appendChild(LIST_ITEM);
}
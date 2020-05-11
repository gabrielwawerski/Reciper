const RECIPE_NAME = document.getElementById('recipe-name');
const RECIPE_IMG = document.getElementById('recipe-img');
const INGREDIENTS_LIST = document.getElementById('ingredients-table');
const RECIPE_LIST = document.getElementById('recipe-description-data');
console.log(RECIPE_LIST);

RECIPE_NAME.innerText = localStorage.getItem("name");
RECIPE_IMG.innerText = localStorage.getItem("img");


let ingredients = localStorage.getItem("productList").split(",");
let recipeDescription = localStorage.getItem("instructions").split("-");
console.log(recipeDescription);

for (let i = 0; i < ingredients.length; i++) {
    const LIST_ITEM = document.createElement('li');
    LIST_ITEM.appendChild(document.createTextNode(ingredients[i]));
    INGREDIENTS_LIST.appendChild(LIST_ITEM);
}

for (let i = 0; i < recipeDescription.length; i++) {
    const LIST_ITEM = document.createElement('li');
    LIST_ITEM.appendChild(document.createTextNode(recipeDescription[i]));
    RECIPE_LIST.appendChild(LIST_ITEM);
}
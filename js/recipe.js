const RECIPE_NAME = document.getElementById('recipe-name');
const RECIPE_IMG = document.getElementById('recipe-img');
const INGREDIENTS_TABLE = document.getElementById('ingredients-table');
const RECIPE_DESCRIPTION = document.getElementById('recipe-description-data');

RECIPE_NAME.innerText = localStorage.getItem("name");
RECIPE_IMG.innerText = localStorage.getItem("img");

RECIPE_DESCRIPTION.innerText = localStorage.getItem("description");
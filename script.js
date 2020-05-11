const REQUEST_URL = 'https://gabrielwawerski.github.io/Reciper/recipes.json';
let request = new XMLHttpRequest();

request.open('GET', REQUEST_URL);
request.responseType = 'json';
request.send();

const PRODUCT_LIST_TABLE = document.getElementById("product-list-table");
const RECIPE_DESCRIPTION_DATA = document.getElementById("recipe-description-data");
const RECIPE_CONTAINER = document.getElementById('recipe-container');
const RECIPES = [];

request.onload = function () {
    let json = request.response;
    let recipes = json.recipes;

    for (let i = 0; i < recipes.length; i++) {
        const RECIPE = document.createElement("div");
        RECIPE.className = "recipe";

        const HYPERLINK = document.createElement("a");
        HYPERLINK.href = "html/recipe.html";

        const IMG_CONTAINER = document.createElement("div");
        IMG_CONTAINER.className = "img-container";

        const RECIPE_IMG = document.createElement("img");
        RECIPE_IMG.className = "recipe-img";
        RECIPE_IMG.src = "img/recipe.png";
        RECIPE_IMG.alt = "asd";

        const RECIPE_INFO = document.createElement("div");
        RECIPE_INFO.className = "recipe-info";

        const RECIPE_TITLE = document.createElement("p");
        RECIPE_TITLE.className = "recipe-title";

        const RECIPE_DESCRIPTION = document.createElement("p");
        RECIPE_DESCRIPTION.className = "recipe-description";


        RECIPE_TITLE.innerText = recipes[i].name;
        RECIPE_DESCRIPTION.innerText = recipes[i].description;

        IMG_CONTAINER.appendChild(RECIPE_IMG);
        HYPERLINK.appendChild(IMG_CONTAINER);

        RECIPE_INFO.appendChild(RECIPE_TITLE);
        RECIPE_INFO.appendChild(RECIPE_DESCRIPTION);

        HYPERLINK.appendChild(RECIPE_INFO);

        RECIPE.append(HYPERLINK);
        RECIPE_CONTAINER.appendChild(RECIPE);

        RECIPES.push(RECIPE);
    }
};



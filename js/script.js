// populates flex container with data from json
const REQUEST_URL = 'https://gabrielwawerski.github.io/Reciper/recipes.json';
const RECIPE_CONTAINER = document.getElementById('recipe-container');
let request = new XMLHttpRequest();

request.open('GET', REQUEST_URL);
request.responseType = 'json';
request.send();

// klasa recipe - dane z jsona + dom element checkbox w niej

request.onload = function () {
    let json = request.response;
    let recipes = json.recipes;

    for (let i = 0; i < recipes.length; i++) {
        const RECIPE = document.createElement("div");
        RECIPE.className = "recipe";

        const IMG_CONTAINER = document.createElement("div");
        IMG_CONTAINER.className = "img-container";

        const CHECKBOX = document.createElement("input");
        CHECKBOX.type = "checkbox";
        CHECKBOX.className = "checkbox";
        CHECKBOX.name = "addToList";
        // CHECKBOX.value = "on";

        const HYPERLINK = document.createElement("a");
        HYPERLINK.href = "html/recipe.html";
        HYPERLINK.className = "recipe-link";

        const RECIPE_IMG = document.createElement("img");
        RECIPE_IMG.className = "recipe-img";
        RECIPE_IMG.src = recipes[i].img;
        RECIPE_IMG.alt = "asd";

        const RECIPE_INFO = document.createElement("div");
        RECIPE_INFO.className = "recipe-info";

        const RECIPE_TITLE = document.createElement("p");
        RECIPE_TITLE.className = "recipe-title";

        const RECIPE_DESCRIPTION = document.createElement("p");
        RECIPE_DESCRIPTION.className = "recipe-description";


        RECIPE_TITLE.innerText = recipes[i].name;
        RECIPE_DESCRIPTION.innerText = recipes[i].description;

        IMG_CONTAINER.appendChild(HYPERLINK);
        HYPERLINK.appendChild(RECIPE_IMG);
        IMG_CONTAINER.appendChild(CHECKBOX);

        RECIPE_INFO.appendChild(RECIPE_TITLE);
        RECIPE_INFO.appendChild(RECIPE_DESCRIPTION);

        RECIPE.append(IMG_CONTAINER);
        RECIPE.append(RECIPE_INFO);
        RECIPE_CONTAINER.appendChild(RECIPE);

        [RECIPE_IMG, RECIPE_INFO].forEach(item => item.addEventListener('click', function () {
            localStorage.setItem("name", recipes[i].name);
            localStorage.setItem("img", recipes[i].img);
            localStorage.setItem("productList", recipes[i].productList);
            localStorage.setItem("instructions", recipes[i].instructions);

            window.location.assign("html/recipe.html");
        }));
    }
};

// ZAMIAST CHECKBOXA: DIV, IMG - ZIELONY PLUS, CZERWONY MINUS
// handles revealing product list
const SHOPPING_LIST_HEADER = document.getElementById('shopping-list-menu-header');
const SHOPPING_LIST_CONTENT = document.getElementById('shopping-list-content');
const SHOPPING_LIST = document.getElementById('shopping-list');
const SHOPPING_LIST_BUTTON = document.getElementById('shopping-list-button');

SHOPPING_LIST_HEADER.addEventListener('click', function () {
    if (SHOPPING_LIST_CONTENT.style.display === "") {
        SHOPPING_LIST_CONTENT.style.display = "block";
        SHOPPING_LIST_BUTTON.style.transform = 'rotate(180deg)';
    } else {
        SHOPPING_LIST_CONTENT.style.display = "";
        SHOPPING_LIST_BUTTON.style.transform = 'rotate(0deg)';
    }
});


let RECIPE_CHECKBOX = document.getElementsByClassName('checkbox');

for (let i = 0; i < RECIPE_CHECKBOX.length; i++) {
    console.log(RECIPE_CHECKBOX.item(i));
}
console.log(Array.from(RECIPE_CHECKBOX));


// RECIPE_CHECKBOX.addEventListener('click', function () {
//     const SHOPPING_LIST_ENTRY = document.createElement("li");
//     SHOPPING_LIST_ENTRY.appendChild(document.createTextNode("Worked!"));
//     // let test = event.target.parentNode.parentNode.parentNode;
//     console.log(localStorage.getItem("name"));
//
//     // for (let i = 0; i < asd; i++) {
//     //
//     // }
//
//     if (RECIPE_CHECKBOX.checked === true) {
//         SHOPPING_LIST.appendChild(SHOPPING_LIST_ENTRY);
//     } else {
//         SHOPPING_LIST.removeChild(SHOPPING_LIST.lastChild);
//     }
// });
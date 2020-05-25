const RECIPE_NAME = document.getElementById('recipe-name');
const RECIPE_IMG = document.getElementById('recipe-img');
const INGREDIENTS_LIST = document.getElementById('ingredients-table');
const RECIPE_LIST = document.getElementById('recipe-instructions-data');

RECIPE_NAME.innerText = localStorage.getItem("name");
RECIPE_IMG.style.backgroundImage = `url(\"../img/${localStorage.getItem("img")}\")`;


let ingredients = localStorage.getItem("productList").split("|");
let recipeInstruction = localStorage.getItem("instructions").split("|");

// const SHOPPING_LIST_CONTENT = document.getElementById('shopping-list-content');
// let shoppingListItems = JSON.parse(localStorage.getItem("shoppingListItems"));
//
// for (let i of shoppingListItems) {
//     for (let item of i.productList) {
//         SHOPPING_LIST_CONTENT.appendChild(createListEntryMarkup(item, i.index))
//     }
// }

for (let i = 0; i < ingredients.length; i++) {
    const LIST_ITEM = document.createElement('li');
    LIST_ITEM.appendChild(document.createTextNode(ingredients[i]));
    INGREDIENTS_LIST.appendChild(LIST_ITEM);
}

for (let i = 0; i < recipeInstruction.length; i++) {
    const LIST_ITEM = document.createElement('li');
    LIST_ITEM.appendChild(document.createTextNode(recipeInstruction[i]));
    RECIPE_LIST.appendChild(LIST_ITEM);
}

function createListEntryMarkup(productName, id) {
    const STRIKE_THROUGH = document.createElement("div");
    STRIKE_THROUGH.className = "strike-through";

    const SHOPPING_LIST_ENTRY_TEXT = document.createElement("p");
    SHOPPING_LIST_ENTRY_TEXT.className = "shopping-list-entry-text";
    SHOPPING_LIST_ENTRY_TEXT.innerText = productName;

    const SHOPPING_LIST_ENTRY_CHECKBOX_CONTAINER = document.createElement("div");
    SHOPPING_LIST_ENTRY_CHECKBOX_CONTAINER.className = "shopping-list-entry-checkbox-container";

    const CHECKBOX = document.createElement("input");
    CHECKBOX.type = "checkbox";
    CHECKBOX.className = "shopping-list-entry-checkbox";
    CHECKBOX.name = "checkProduct";

    const SHOPPING_LIST_ENTRY = document.createElement("div");
    SHOPPING_LIST_ENTRY.className = `shopping-list-entry ${id}`;

    SHOPPING_LIST_ENTRY.appendChild(STRIKE_THROUGH);
    SHOPPING_LIST_ENTRY.appendChild(SHOPPING_LIST_ENTRY_TEXT);

    SHOPPING_LIST_ENTRY_CHECKBOX_CONTAINER.appendChild(CHECKBOX);

    SHOPPING_LIST_ENTRY.appendChild(SHOPPING_LIST_ENTRY_CHECKBOX_CONTAINER);

    CHECKBOX.addEventListener('click', function () {
        if (CHECKBOX.checked === true) {
            STRIKE_THROUGH.style.width = "92%";
        } else {
            STRIKE_THROUGH.style.width = "0";
        }
    });

    return SHOPPING_LIST_ENTRY;
}
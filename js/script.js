// populates flex container with data from json
const REQUEST_URL = 'https://gabrielwawerski.github.io/Reciper/recipes.json';
const RECIPE_CONTAINER = document.getElementById('recipe-container');
let request = new XMLHttpRequest();

request.open('GET', REQUEST_URL);
request.responseType = 'json';
request.send();

// klasa recipe - dane z jsona + dom element checkbox w niej

class Recipe {
    constructor(name, img, productList, description, instructions, checkbox) {
        this.name = name;
        this.img = img;
        this.productList = productList;
        this.description = description;
        this.instructions = instructions;
        this.checkbox = checkbox;
    }
}
Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
};
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(let i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
};

request.onload = function () {
    let json = request.response;
    let recipes = json.recipes;
    let recipeArray = [];

    for (let i = 0; i < recipes.length; i++) {
        const RECIPE = document.createElement("div");
        RECIPE.className = "recipe";

        const IMG_CONTAINER = document.createElement("div");
        IMG_CONTAINER.className = "img-container";

        const CHECKBOX = document.createElement("input");
        CHECKBOX.type = "checkbox";
        CHECKBOX.className = "checkbox";
        CHECKBOX.name = "addToList";

        const RECIPE_INFO = document.createElement("div");
        RECIPE_INFO.className = "recipe-info";

        const RECIPE_TITLE = document.createElement("p");
        RECIPE_TITLE.className = "recipe-title";

        const RECIPE_DESCRIPTION = document.createElement("p");
        RECIPE_DESCRIPTION.className = "recipe-description";

        const IMG_WRAPPER = document.createElement("div");
        IMG_WRAPPER.className = "img-wrapper";
        IMG_WRAPPER.style.backgroundImage = `url(\"img/${recipes[i].img}\")`;

        RECIPE_TITLE.innerText = recipes[i].name;
        RECIPE_DESCRIPTION.innerText = recipes[i].description;

        IMG_WRAPPER.appendChild(IMG_CONTAINER);
        IMG_WRAPPER.appendChild(CHECKBOX);

        RECIPE_INFO.appendChild(RECIPE_TITLE);
        RECIPE_INFO.appendChild(RECIPE_DESCRIPTION);

        RECIPE.append(IMG_WRAPPER);
        RECIPE.append(RECIPE_INFO);
        RECIPE_CONTAINER.appendChild(RECIPE);

        let recipe = new Recipe(
            recipes[i].name,
            recipes[i].img,
            recipes[i].productList,
            recipes[i].description,
            recipes[i].instructions,
            CHECKBOX);

        recipeArray.push(recipe);

        [IMG_CONTAINER, RECIPE_INFO].forEach(item => item.addEventListener('click', function () {
            localStorage.setItem("name", recipes[i].name);
            localStorage.setItem("img", recipes[i].img);
            localStorage.setItem("productList", recipes[i].productList);
            localStorage.setItem("instructions", recipes[i].instructions);

            window.location.assign("html/recipe.html");
        }));
    }


    const SHOPPING_LIST_CONTENT = document.getElementById('shopping-list-content');

    function createListEntry(productName, id) {
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

    // handle adding and removing list items
    for (let i = 0; i < recipeArray.length; i++) {
        recipeArray[i].checkbox.addEventListener('click', function () {
            console.log("clicked!");
            let products = recipeArray[i].productList;

            if (recipeArray[i].checkbox.checked === true) {
                for (let j = 0; j < products.length; j++) {
                    console.log("tried adding!");
                    SHOPPING_LIST_CONTENT.append(createListEntry(products[j], i.toString()));
                }
            } else {
                document.getElementsByClassName(i.toString()).remove();
            }
        })
    }
};


// TODO ZAMIAST CHECKBOXA: DIV, IMG - ZIELONY PLUS, CZERWONY MINUS
// TODO MOZLIWOSC ROZWINIECIA LISTY NA CALY EKRAN NA MOBILE
// TODO MOZLIWOSC DODAWANIA WLASNYCH POZYCJI DO SHOPPING LISTY - INPUT FIELD NA DOLE Z PLUSIKIEM PO PRAWEJ
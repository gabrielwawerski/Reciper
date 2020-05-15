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
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}

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

        let recipe = new Recipe(
            recipes[i].name,
            recipes[i].img,
            recipes[i].productList,
            recipes[i].description,
            recipes[i].instructions,
            CHECKBOX);

        recipeArray.push(recipe);

        [RECIPE_IMG, RECIPE_INFO].forEach(item => item.addEventListener('click', function () {
            localStorage.setItem("name", recipes[i].name);
            localStorage.setItem("img", recipes[i].img);
            localStorage.setItem("productList", recipes[i].productList);
            localStorage.setItem("instructions", recipes[i].instructions);

            window.location.assign("html/recipe.html");
        }));
    }


    // handle adding and removing list items
    for (let i = 0; i < recipeArray.length; i++) {
        recipeArray[i].checkbox.addEventListener('click', function () {
            let products = recipeArray[i].productList;

            if (recipeArray[i].checkbox.checked === true) {
                for (let j = 0; j < products.length; j++) {
                    let listItem = document.createElement("li");
                    listItem.className = `dotted ${i.toString()}`;
                    listItem.appendChild(document.createTextNode(products[j]));
                    SHOPPING_LIST.append(listItem);
                }
            } else {
                document.getElementsByClassName(i.toString()).remove();
                // let listItems = SHOPPING_LIST.getElementsByTagName("li");
                //
                // for (let x = 0; i < listItems.length; x++) {
                //     if (listItems[x].id === i.toString()) {
                //        listItems[x].parentNode.removeChild(listItems[x]);
                //     }
                // }
            }
        })
    }
};


// TODO ZAMIAST CHECKBOXA: DIV, IMG - ZIELONY PLUS, CZERWONY MINUS
// TODO MOZLIWOSC DODAWANIA WLASNYCH POZYCJI DO SHOPPING LISTY - INPUT FIELD NA DOLE Z PLUSIKIEM PO PRAWEJ 
// handles revealing product list
const SHOPPING_LIST_CONTAINER = document.getElementById('shopping-list-container');
const SHOPPING_LIST_HEADER = document.getElementById('shopping-list-header');
const SHOPPING_LIST_CONTENT = document.getElementById('shopping-list-content');
const SHOPPING_LIST = document.getElementById('shopping-list');
const SHOPPING_LIST_BUTTON = document.getElementById('shopping-list-button');

SHOPPING_LIST_HEADER.addEventListener('click', function () {
    if (SHOPPING_LIST_CONTENT.style.display === "") {
        SHOPPING_LIST_CONTENT.style.display = "block";
        SHOPPING_LIST_CONTAINER.style.height = "400px";
        SHOPPING_LIST_BUTTON.style.transform = 'rotate(180deg)';
    } else {
        let animationDuration = 1000;
        setTimeout(function(){
            // Animation done!
        }, animationDuration);
        SHOPPING_LIST_CONTENT.style.display = "";
        SHOPPING_LIST_CONTAINER.style.height = "50px";
        SHOPPING_LIST_BUTTON.style.transform = 'rotate(0deg)';
    }
});

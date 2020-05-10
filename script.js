let requestUrl = 'https://gabrielwawerski.github.io/Reciper/recipes.json';
let request = new XMLHttpRequest();

request.open('GET', requestUrl);
request.responseType = 'json';
request.send();

request.onload = function() {
    let recipes = request.response;
    console.log(recipes.productList);
};


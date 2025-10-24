
function inicialList () {

fetch("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json")
.then(function(response) {
    return response.json();
})
.then(function(data) {
    setSuperHeroiList(data);
});


}

function setSuperHeroiList (data) {

    data.forEach(function(superheroi, index) {
        insertSuperHeroi(superheroi, index + 1);
    }
    );
}

function insertSuperHeroi (superheroi, id) {
    const divList = document.getElementById("superheroi-list");

    const divItem = document.createElement("div");

    const elementImg = document.createElement("img");
    elementImg.src = superheroi.images.lg;
    divItem.appendChild(elementImg);

    const element = document.createElement("p");
    element.innerText = superheroi.name;
    divItem.appendChild(element);

    divList.appendChild(divItem);

}
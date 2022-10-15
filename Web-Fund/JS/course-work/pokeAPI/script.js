
var list = document.querySelector('.top-poke');
async function getPokeData() {
    var response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=15");
    var pokeData = await response.json();
    // console.log(pokeData.results[0].name);
    for (let index = 0; index < pokeData.results.length; index++) {
        console.log(pokeData.results[index].name);
        var listItem = document.createElement('li');
        listItem.innerText = pokeData.results[index].name;
        list.appendChild(listItem);
    }
}
getPokeData();
var pokeImg = document.querySelector('.poke')
async function getPokeOfTheDay() {
    var response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
    var pokeData = await response.json();
    // console.log(pokeData.results[0].name);
    console.log(pokeData.sprites.front_shiny);
    pokeImg.src = pokeData.sprites.front_shiny;
}
getPokeOfTheDay();

async function changeImg() {
    var response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
    var pokeData = await response.json();
    // console.log(pokeData.results[0].name);
    console.log(pokeData.sprites.front_shiny);
    pokeImg.src = pokeData.sprites.back_shiny;
}
function getRandNum(){
var num = Math.floor(Math.random()*151);
return num;
}
var rand = getRandNum();
console.log(rand);

//get an OG
async function getOgPoke(){
    var response = await fetch("https://pokeapi.co/api/v2/generation/1/");
    var pokeData = await response.json();
    console.log(pokeData.pokemon_species[rand]);
}
getOgPoke()


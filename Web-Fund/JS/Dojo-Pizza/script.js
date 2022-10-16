// var sandwich = {
//     bread:    "sourdough",
//     protein:  "london broil",
//     cheese:   "lacey swiss cheese",
//     toppings: ["romaine lettuce", "heirloom tomatoes", "horseradish sauce"]
// };
    
// console.log(sandwich);


// function sandwichFactory(bread, protein, cheese, toppings) {
//     var sandwich = {};
//     sandwich.bread = bread;
//     sandwich.protein = protein;
//     sandwich.cheese = cheese;
//     sandwich.toppings = toppings;
//     return sandwich;
// }
    
// var s1 = sandwichFactory("wheat", "turkey", "provolone", ["mustard", "fried onions", "arugula"]);
// console.log(s1);


function pizzaOven(crust, sauce, cheese, toppings){
    var pizza = {}
        pizza.crustType = crust;
        pizza.sauceType = sauce;
        pizza.cheeses = cheese;
        pizza.toppings = toppings;
        return pizza;
}

var pizza1 = pizzaOven("Deep Dish", "Traditional", "Mozzarella",["Pepperoni","Sausage"]);
console.log(pizza1);

var pizza2 = pizzaOven("Hand-Tossed", "Marinara", ["Mozzarella","Feta"],["Mushrooms","Olives","Onions"]);
console.log(pizza2);

var pizza3 = pizzaOven("Stuffed Crust", "Spicy Marinara", "Mozzarella", ["Extra Cheese","Half Pepperoni"]);
console.log(pizza3);

var pizza4 = pizzaOven("Thin Crust", "No Sauce", "Ricotta", "None");
console.log(pizza4);

function randomPizza(){
    var crusts = ["deep dish", "hand tossed", "stuffed crust","thin crust"];
    var sauces = ["traditional", "marinara", "spicy marinara","no sauce"];
    var cheese = ["mozzarella", "feta","ricotta","cheddar why","none"];
    var toppings = ["pepperoni","green peppers","onions","sausage",'black olives','gross mushrooms','meatballs','exta cheese'];
    var randPizza = {}
        randPizza.crust = crusts[Math.floor(Math.random()*crusts.length)];
        randPizza.sauces = sauces[Math.floor(Math.random()*sauces.length)];
        randPizza.cheese = cheese[Math.floor(Math.random()*cheese.length)];
        randPizza.toppings = toppings[Math.floor(Math.random()*toppings.length)];
        return randPizza;
}
var rand = randomPizza();
console.log("Random Requested");
console.log(rand);
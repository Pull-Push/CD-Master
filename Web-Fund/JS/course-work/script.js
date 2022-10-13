var i = 0;

function conalert(message){
    if (i<10){
        i++;  
        console.log(message+i);
        }
}

function example(element){
    console.log('the element clicked was', element);
}

function test(element){
    if (element.innerText == "Change Me"){
        element.innerText = "Change Me Back!";
        element.classList.add('red');
        console.log(element);
    }
    else {
        element.innerText = "Change Me";
        element.classList.remove('red');
        console.log(element);
    }
}

function hide(element){
    element.remove();
    alert("oh no!");
}
function addShadow(element){
    element.classList.add("shadow");
}
function removeShadow(element){
    element.classList.remove("shadow");
}

function changeThat(){
    document.querySelector("h1").innerText=("I've been Changed!")
}

function darkness(element){
    console.log(element)
    if(element.classList.contains("darkmode")){
        element.classList.remove("darkmode");
    }
    else {
    element.classList.add("darkmode");
    }
}

function message(){
    alert("Delayed Message");
}

console.log("Start");
setTimeout(message, 5000);
console.log("End")


console.log("it's working!");
console.log("Hey I'm Loading Here!")

var x = document.querySelectorAll(".userrequest")
// console.log(x);


function changeName(){
    document.querySelector("h2").innerText = "Jeffrey Sokol";
}

function accept(num){
    x[num].remove();
    document.querySelector("#numreq").innerText--;
    document.querySelector("#numconn").innerText++;
}

function nope(num){
    x[num].remove();
    document.querySelector("#numreq").innerText--;
}
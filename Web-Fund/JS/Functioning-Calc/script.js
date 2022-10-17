//Use following code snippets
var displayDiv = document.querySelector("#display");
displayDiv.innerText = 0;

var eq = []
function press(num){
    if(displayDiv.innerText==0){
        displayDiv.innerText=" ";
        displayDiv.innerText += num; 
    }else{
        displayDiv.innerText += num;
    }
    x = Number(displayDiv.innerText)
    // console.log(x)
    return x;
}
function clr(){
    displayDiv.innerText = 0;
    eq = []

}

function setOP(op){
    eq.push(Number(x));
    displayDiv.innerText = 0;
    y = op;
    return y;
}

function calculate(){
    eq.push(Number(x))
    // console.log(eq[0]);
    // console.log(y);
    // console.log(eq[1]);
    answer = ${eq[0]}${y}${eq[1]};
    console.log(answer)
}
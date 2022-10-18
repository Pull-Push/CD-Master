//Use following code snippets
var displayDiv = document.querySelector("#display");
displayDiv.innerText = 0;
eqArray = [0,0];

function clr(){
    eqArray = [0,0];
    displayDiv.innerText = 0;
}

function press(num){
    if(displayDiv.innerText == 0){
        displayDiv.innerText = ""
        displayDiv.innerText = displayDiv.innerText + num;
    }else{
        displayDiv.innerText = displayDiv.innerText + num;
    }
}

function setOP(op){
    eqArray[0] = Number(displayDiv.innerText);
    oper = op;
    displayDiv.innerText = 0;
}

function calculate(){
    eqArray[1] = Number(displayDiv.innerText);
    if (oper == "+" ){
        answer = Number(eqArray[0])+Number(eqArray[1]);
        }else if(oper == "-"){
        answer = Number(eqArray[0])-Number(eqArray[1]);
        }else if(oper == "*"){
        answer = Number(eqArray[0])*Number(eqArray[1]);
        }else{
        answer = Number(eqArray[0])/Number(eqArray[1]);
    }
    displayDiv.innerText = answer;
}
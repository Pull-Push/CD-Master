function hideMe(element){
    element.remove();
}
function petMe(num){
    var x = "#pet"+num;
    document.querySelector(x).innerText++;
}

function selectAnimal(element){
    alert(`You are looking for ${element.value}`);
}
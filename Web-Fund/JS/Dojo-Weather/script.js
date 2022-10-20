var count = 0

function hide(){
    var cookiediv = document.querySelector(".cookie");
    cookiediv.remove();
}

function report(){
    alert("Loading Weather Report");
}

function convert(){
    var highs = document.querySelectorAll(".high");
    var lows = document.querySelectorAll(".low");
    
    if (count == 0){
        for( i=0; i<highs.length;i++ ){
            var oldlow = parseInt(lows[i].innerText);
            var oldhigh = parseInt(highs[i].innerText);
            var newhigh = Math.round((oldhigh*9/5)+32);
            var newlow = Math.round((oldlow*9/5)+32);
    
            highs[i].innerText = (newhigh)+"°";
            lows[i].innerText = (newlow)+"°";

        }
            count++;
    }else if ( count == 1 ){
        for(i=0; i<highs.length;i++){
            var oldlow = parseInt(lows[i].innerText);
            var oldhigh = parseInt(highs[i].innerText);
            var newhigh = Math.round((oldhigh-32)*5/9);
            var newlow = Math.round((oldlow-32)*5/9);
    
            highs[i].innerText = (newhigh)+"°";
            lows[i].innerText = (newlow)+"°";
        }
        count = count -1;
    }
}
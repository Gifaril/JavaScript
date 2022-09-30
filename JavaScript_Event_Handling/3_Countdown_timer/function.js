const element = document.getElementById("countdown-number");
var count = 10;
var x = setInterval(function(){
    if (count == 0){
        clearInterval(x);
        element.style.display = "none";
        document.getElementById("rocket-pic").style.display = "initial";
    }
    element.innerHTML = count;
    count--;},1000);
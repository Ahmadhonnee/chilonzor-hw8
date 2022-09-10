var elResult = document.querySelector(".result");


var son1 = prompt("Son 1")
var son2 = prompt("Son 2")

if((son1 >= 10 && son1 <= 20) || (son2 >= 10 && son2 <= 20)){
    elResult.textContent = "True."
    elResult.style.background = "green"
}else{
    elResult.textContent = "False."
    elResult.style.background = "red"
}
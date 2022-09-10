// UY ishi 1

var elResult = document.querySelector(".result");

var son1 = prompt("Birinchi son.") - 0;
var son2 = prompt("Ikkinchi son.") - 0;

if ((son1 === 10 || son2 === 10) || (son1 + son2 === 10)){
    elResult.textContent = "True!"
    elResult.style.background = "green"
}
else{
    elResult.textContent = "False!";
    elResult.style.background = "red"
}
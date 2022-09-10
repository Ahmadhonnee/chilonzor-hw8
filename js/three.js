var elResult = document.querySelector(".result");

var Son1 = prompt("Enter the number 1.")
var Son2 = prompt("Enter the number 2.")

if ((Son1 < 0) && (Son2 < 0)){
    elResult.textContent = "False";
    elResult.style.background = "red"
}else if((Son1 > 0) && (Son2 > 0)){
    elResult.textContent = "False";
    elResult.style.background = "red"
}else{
    elResult.textContent = "True";
    elResult.style.background = "green"
}
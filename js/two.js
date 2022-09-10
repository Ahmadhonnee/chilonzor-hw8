var elResult = document.querySelector(".result");

var n = prompt("Son kiriting.");

var tenFrom100 = ((100 - n <= 10) || (n <= 120));/**|| (100 - n <= -10) */

var tenFrom200 = ((200 - n <= 10) || (n <= 220));/**|| (200 - n <= -10) */

if (n>=90 && n<=110){
    elResult.textContent = "True";
    elResult.style.background = "green"
}else if(n>=190 && n<=210){
    elResult.textContent = "True";
    elResult.style.background = "green"
}else{
    elResult.textContent = "False";
    elResult.style.background = "red"
}
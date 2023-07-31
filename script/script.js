/**
*
* script.js 
* @author - Mazeen
* @date - 31/7/2023 
**/
function calculatorKeys(givenValue) {
    document.getElementById("result").innerHTML += givenValue.value;
}

function calculatorEvaluation() {
    var x = document.getElementById("result").innerHTML;
    var y = eval(x);
    document.getElementById("result").innerHTML = y;
}

function calculatorClear() {
    document.getElementById("result").innerHTML = "";
}
const numbers = document.querySelectorAll(".number");
const symbols = document.querySelectorAll(".symbol");
const equals = document.getElementById("equals");
const clear = document.getElementById("clear");
const screen = document.querySelector(".screen");
let firstOperand = [];
let secondOperand = [];
let operation = "";

symbols.forEach(symbol => symbol.addEventListener("click",(op)=>{
    operation = op;
    screen.textContent = operation.target.innerHTML;
}))
numbers.forEach(number => number.addEventListener("click",(number)=>{
    const value = number.target.innerHTML;
    console.log(value);
    if(operation === ""){
       firstOperand.push(value);
       screen.textContent = firstOperand.join("");
    }
    else{
        secondOperand.push(value);
        screen.textContent = secondOperand.join("");
    }
}));
function resetCalculation(){
    screen.textContent = "0";
    firstOperand = [];
    secondOperand = [];
    operation = "";
}
function hEquals(){
    let num1 = parseFloat(firstOperand.join(""));
    let num2 = parseFloat(secondOperand.join(""));
    let operations = operation.target.innerHTML;
    screen.textContent = operations;
    let result;
    switch(operations){
        case "+":
        result = num1 + num2;
        break;
        case "-":
        result = num1 - num2;
        break;
        case "x":
        result = num1 * num2;
        break;
        case "÷":
        result = num1 / num2;
        break;
        default:
        result = "Error";
    }
    resetCalculation();
    screen.textContent = result;
}
clear.addEventListener("click",()=>resetCalculation());
equals.addEventListener("click",()=>hEquals());
let num1 = 84
let num2 = 7
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"

let resultOfOperation=document.getElementById("sum-el");
function add(){
    let addition=num1+num2
    resultOfOperation.textContent="Result of the operation: "+addition
}
function subtraction(){
    let subtraction
    if(num1>num2)
        subtraction=num1-num2
    else
        subtraction=num2-num1

    resultOfOperation.textContent="Result of the operation: "+subtraction
}

function division(){
    let division
    if(num1>num2)
        division=num1/num2
    else
        division=num2/num1

    resultOfOperation.textContent="Result of the operation: "+division

}

function multiplication(){
    let multiplication=num2*num1
    resultOfOperation.textContent="Result of the operation: "+multiplication

}


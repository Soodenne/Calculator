const calc_clear = document.getElementById("calc_clear");
const calc_back = document.getElementById("calc_back");
const calc_op = document.getElementById("calc_op");
const btn_7 = document.getElementById("btn_7");
const btn_8 = document.getElementById("btn_8");
const btn_9 = document.getElementById("btn_9");
const btn_divide = document.getElementById("btn_divide");
const btn_multiple = document.getElementById("btn_multiple");
const btn_4 = document.getElementById("btn_4");
const btn_5 = document.getElementById("btn_5");
const btn_6 = document.getElementById("btn_6");
const btn_minus = document.getElementById("btn_minus");
const btn_0 = document.getElementById("btn_0");
const btn_1 = document.getElementById("btn_1");
const btn_2 = document.getElementById("btn_2");
const btn_3 = document.getElementById("btn_3");
const btn_plus = document.getElementById("btn_plus");
const calc_zero = document.getElementById("calc_zero");
const calc_decimal = document.getElementById("calc_decimal");
const calc_eval = document.getElementById("calc_eval");
const total = document.getElementById("total");

let currentInput = "0";
let previousInput = "";
let operator = "";

// Function to update the display
function updateDisplay() {
    total.innerHTML = currentInput;
}

// Event listeners for number buttons
btn_0.onclick = function () {
    if (currentInput !== "0") {
        currentInput += "0";
        updateDisplay();
    }
}

btn_1.onclick = function () {
    handleNumberClick("1");
}

btn_2.onclick = function () {
    handleNumberClick("2");
}

btn_3.onclick = function () {
    handleNumberClick("3");
}

btn_4.onclick = function () {
    handleNumberClick("4");
}

btn_5.onclick = function () {
    handleNumberClick("5");
}

btn_6.onclick = function () {
    handleNumberClick("6");
}

btn_7.onclick = function () {
    handleNumberClick("7");
}

btn_8.onclick = function () {
    handleNumberClick("8");
}

btn_9.onclick = function () {
    handleNumberClick("9");
}

// Event listener for the decimal button
calc_decimal.onclick = function () {
    if (!currentInput.includes(".")) {
        currentInput += ".";
        updateDisplay();
    }
}

// Event listener for the equals button
calc_eval.onclick = function () {
    calculateResult();
}

// Event listeners for operator buttons
btn_plus.onclick = function () {
    handleOperatorClick("+");
}

btn_minus.onclick = function () {
    handleOperatorClick("-");
}

btn_multiple.onclick = function () {
    handleOperatorClick("*");
}

btn_divide.onclick = function () {
    handleOperatorClick("/");
}

// Event listener for the clear button
calc_clear.onclick = function () {
    currentInput = "0";
    previousInput = "";
    operator = "";
    updateDisplay();
}

// Function to handle number button clicks
function handleNumberClick(number) {
    if (operator === "=") {
        // Start a new calculation when a number is clicked after equals (=) is pressed
        currentInput = number;
        operator = "";
        previousInput = "";
    } else if (currentInput === "0") {
        currentInput = number;
    } else {
        currentInput += number;
    }
    updateDisplay();
}


// Function to handle operator button clicks
function handleOperatorClick(newOperator) {
    if (operator !== "") {
        calculateResult();
    }
    operator = newOperator;
    previousInput = currentInput;
    currentInput = "0";
}

// Function to perform the calculation
function calculateResult() {
    let result;
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        default:
            result = num2;
    }

    currentInput = result.toString();
    operator = "=";
    updateDisplay();
}

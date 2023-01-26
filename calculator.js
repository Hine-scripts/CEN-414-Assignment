// function to handle calculator operations
function calculator(num1, num2, operator) {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            if (num2 === 0) {
                return "Cannot divide by zero";
            } else {
                return num1 / num2;
            }
        default:
            return "Invalid operator";
    }
}

// test the calculator function
console.log(calculator(5                , 7, "+")); // 12
console.log(calculator(5, 7, "-")); // -2
console.log(calculator(5, 7, "*")); // 35
console.log(calculator(5, 7, "/")); // 0.7142857142857143
console.log(calculator(5, 0, "/")); // "Cannot divide by zero"
console.log(calculator(5, 7, "%")); // "Invalid operator"

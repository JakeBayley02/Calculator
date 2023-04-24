// Create a grid for the numbers 0-9
// Create a grid for the functions (divide, add, multiply and subtract)
const numberA = "";
const operator = "";
const numberB = "";

function operate(num1,num2,operator){
 switch (operator){
    case '+':
        return sum(num1,num2);

    case '/':
        return divide(num1,num2);

    case '-':
        return subtract(num1,num2);

    case '*':
        return multiply(num1,num2);
        
 };
}
   



// basic operators
function divide(a,b){
    return result = a/b;
};
function sum(a,b){
    return result = a+b;
};
function subtract(a,b){
    return result = a - b;
};
function multiply(a,b){
    return result = a * b;

};

console.log(operate(2,8,'+'))
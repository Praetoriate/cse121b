/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1,number2) {
    return number1 + number2;
}

function addNumbers () {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click',addNumbers);

/* Function Expression - Subtract Numbers */
function subtract (subtract1,subtract2) {
    return subtract1 - subtract2;
}

function subtractNumbers () {
    let subNumber1 = Number(document.querySelector('#subtract1').value);
    let subNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subNumber1, subNumber2);
}

document.querySelector('#subtractNumbers').addEventListener('click',subtractNumbers);

/* Arrow Function - Multiply Numbers */
const result = (factor1,factor2) => factor1 * factor2;

function multiplyNumbers () {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = result(factor1,factor2);
}

document.querySelector('#multiplyNumbers').addEventListener('click',multiplyNumbers);

/* Open Function Use - Divide Numbers */
const result1 = (dividend,divisor) => dividend / divisor;

function divideNumbers () {
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = result1(dividend,divisor);
}

document.querySelector('#divideNumbers').addEventListener('click',divideNumbers);

/* Decision Structure */
let currentYear = new Date().getFullYear();
document.querySelector('#year').value = currentYear;


/* ARRAY METHODS - Functional Programming */
let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13];

/* Output Source Array */
document.getElementById('array').innerHTML = numbers; 

/* Output Odds Only Array */
document.getElementById('odds').innerHTML = numbers.filter((number) => number%2 !== 0);

/* Output Evens Only Array */
document.getElementById('evens').innerHTML = numbers.filter((number) => number%2 === 0);

/* Output Sum of Org. Array */
document.getElementById('sumOfArray').innerHTML = numbers.reduce((sum,number) => sum + number);

/* Output Multiplied by 2 Array */
document.getElementById('multiplied').innerHTML = numbers.map(number => number*2);

/* Output Sum of Multiplied by 2 Array */
let i = numbers.map(number => number*2);
document.getElementById('sumOfMultiplied').innerHTML = i.reduce((sum,number) => sum + number);
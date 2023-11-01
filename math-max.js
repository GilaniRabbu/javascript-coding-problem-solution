var cos = 5;
var tan = 10;
var cot = 15;

console.log(Math.max(cos, tan, cot) + " is the Greatest");

/* ==================== */

var business = 450;
var tech = 650;
var doctor = 550;

var ace = Math.max(business, tech, doctor);

console.log(ace + " is the Top Number");

/* ==================== */

const num1 = parseFloat(prompt("Enter first number: "));
const num2 = parseFloat(prompt("Enter second number: "));
const num3 = parseFloat(prompt("Enter third number: "));

const largest = Math.max(num1, num2, num3);

console.log("The largest number is " + largest);
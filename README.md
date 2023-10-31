# Javascript Coding Problem Solution

1. [Word Count](#1-word-count)

2. [Swap The Values of Variables](#2-swap-the-values-of-variables)

3. [Reverse String](#3-reverse-string)

4. [Remove duplicate number from an array](#4-remove-duplicate-number-from-an-array)

5. [Prime Number](#5-prime-number)

6. [Number Converter](#6-number-converter)

7. [Wood Calculator](#7-wood-calculator)

8. [Leap Year in Javascript](#8-leap-year-in-javascript)

9. [Finding Total](#9-finding-total)

10. [Math Round](#10-math-round)

11. [Finding Max in Array](#11-finding-max-in-array)

12. [Math Max](#12-math-max)

13. [Find the largest of 3 given numbers](#13-find-the-largest-of-3-given-numbers)

14. [Factorial](#14-factorial)

15. [Fibonacci Sequence](#15-fibonacci-sequence)

##

## 1. Word Count

```js
// Word Count

var speech = "I  am a  good person.  I don't snore at night.";

var count = 0;

for (var i = 0; i < speech.length; i++) {
  var char = speech[i];
  // if (char == " ") {} // If not have many space
  if (char == " " && speech[i - 1] != " ") {
    count++;
  }
}

count++;

console.log(count);
```

##

## 2. Swap The Values of Variables

```js
// Swap The Values of Variables

let a = 5; // Example 1

let b = 10;

console.log(a, b);

var temp = a;

a = b;

b = temp;

console.log(a, b);

var x = 5; // Example 2

var y = 7;

x = x + y;

y = x - y;

x = x - y;

console.log(x, y);

let c = 5; // Example 3

let e = 7;

[c, e] = [e, c];

console.log(c, e);
```

##

## 3. Reverse String

```js
function reverseStr(str) {
  var reverse = "";

  for (let i = 0; i < str.length; i++) {
    var char = str[i];
    reverse = char + reverse;
  }

  return reverse;
}

var statement = "Hello New World";

console.log(reverseStr(statement));

var newState = reverseStr("New Connection for new tech");

console.log(newState);
```

##

## 4. Remove duplicate number from an array

```js
// Remove duplicate number from an array

var Name = [1, 2, 3, 4, 5, 2, 6, 3, 7, 8];

var unique = [];

for (var i = 0; i < Name.length; i++) {
  var element = Name[i];

  var index = unique.indexOf(element);

  if (index == -1) {
    unique.push(element);
  }
}

console.log(unique);

/* ==================== */

const Names = ["A", "B", "C", "D", "E", "A", "B", "C", "F", "G", "H"];

function removeDuplicate(name) {
  const unique = [];
  for (let i = 0; i < name.length; i++) {
    const element = name[i];
    if (unique.includes(element) === false) {
      unique.push(element);
    }
  }
  return unique;
}

const uniqueNames = removeDuplicate(Names);

console.log(uniqueNames);
```

##

## 5. Prime Number

```js
// Prime Number

function Prime(n) {
  for (i = 2; i < n; i++) {
    if (n % i == 0) {
      return "Not a Prime Number";
    }
  }
  return "This is Prime Number";
}

var isPrime = Prime(13);

console.log(isPrime);
```

##

## 6. Number Converter

```js
function inchToFeet(inch) {
  var feet = inch / 12;
  return feet;
}

var senior = [156, 288, 300];

var result1 = inchToFeet(senior[0]);
var result2 = inchToFeet(senior[1]);
var result3 = inchToFeet(senior[2]);

console.log(result1);
console.log(result2);
console.log(result3);

var res1 = inchToFeet(156);

console.log(res1);

var res2 = inchToFeet(288);

console.log(res2);

var res3 = inchToFeet(300);

console.log(res3);
```

##

## 7. Wood Calculator

```js
// Wood Calculator

// fixed: per item wood requirements
// 1. chair --> 3 cft
// 2. table --> 10 cft
// 3. bed --> 50 cft

function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
  const perChair = 5;
  const perTable = 15;
  const perBed = 50;

  const totalChair = chairQuantity * perChair;
  const totalTable = tableQuantity * perTable;
  const totalBed = bedQuantity * perBed;

  const totalWood = totalChair + totalTable + totalBed;
  return totalWood;
}

const result = woodCalculator(1, 1, 1);

console.log("Total Number of Wood", result);
```

##

## 8. Leap Year in Javascript

```js
// Leap Year in Javascript

function leapYear(year) {
  const rem = year % 4;
  if (rem === 0) {
    return true;
  } else {
    return false;
  }
}

var col = leapYear(2000);

console.log(col);

var col1 = leapYear(2020);

console.log(col1);

/* ==================== */

function isLeapYear(year) {
  if (year % 100 === 0 ? year % 400 === 0 : year % 4 === 0) {
    console.log("Input year:", year, "is a Leap Year");
  } else {
    console.log("Input year:", year, "is NOT a Leap Year");
  }
}

let inputYear = 2020;

isLeapYear(inputYear);

inputYear = 2000;

isLeapYear(inputYear);
```

##

## 9. Finding Total

```js
// Finding Total

function getArray(number) {
  var sum = 0;

  for (let i = 0; i < number.length; i++) {
    var element = number[i];
    sum = sum + element;
  }

  return sum;
}

var number = [45, 65, 85, 40, 3, 5, 8, 1];

var res = getArray(number);

console.log(res);

var tot = getArray([10, 20, 50]); // Add and Calculate more number in Array

console.log(tot);

/* ==================== */

var n = [12, 5, 6, 45, 7, 8, 9, 12];

var sum = 0;

for (let i = 0; i < n.length; i++) {
  var element = n[i];
  sum = sum + element;
}

console.log(sum);
```

##

## 10. Math Round

```js
var n = 2.5;

var a = Math.floor(n); // Output always 2

var b = Math.ceil(n); // Output always 3

var c = Math.round(n); // The value to be rounded to the nearest integer

console.log(c);

for (var i = 0; i < 5; i++) {
  var math = Math.random() * 5;
  var it = Math.round(math);
  console.log(it);
}
```

##

## 11. Finding Max in Array

```js
var arr = [5, 21, 35, 87, 98, 56, 213, 464, 1, 6, 5, 8, 321];

var max = arr[0];

for (var i = 0; i < arr.length; i++) {
  var element = arr[i];
  if (element > max) {
    max = element;
  }
}

console.log("Highest value is: ", max);

let myArray = [1, 2, 3, 4, 5];

let max1 = myArray[0];

for (let i = 0; i < myArray.length; i++) {
  if (myArray[i] > max1) {
    max1 = myArray[i];
  }
}

console.log(max1);
```

##

## 12. Math Max

```js
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
```

##

## 13. Find the largest of 3 given numbers

**Approach 1: Using the if-else statements**

**Example: The if-else statements used for checking conditions will be used to compare the 3 numbers. The variables will be called x, y and z. We compare x with y and z, y with x and z, and z with x and y to see which is the largest number. In the example below it is first checked if x(=5) is greater than y(=10) and z(=15) which is false. Then the program checks if z(=15) is greater than x(=5) and y(=10) which returns true and hence 15 is the largest.**

```js
var x = 5;
var y = 10;
var z = 15;

if (x > y && x > z) {
  console.log("X = " + x + " is the Greatest");
} else if (z > x && z > y) {
  console.log("Z = " + z + " is the Greatest");
} else {
  console.log("Y = " + y + " is the Greatest");
}

/* ==================== */

var a = 450;
var b = 650;
var c = 550;

if (a > b) {
  if (a > c) {
    console.log("A is big");
  } else {
    console.log("C is big");
  }
} else {
  if (b > c) {
    console.log("B is big");
  } else {
    console.log("C is big");
  }
}
```

##

## 14. Factorial

**For Loop & Function**

```js
var factorial = 1;

for (var i = 1; i <= 10; i++) {
  factorial = factorial * i;
  console.log(i, factorial);
}

/* ==================== */

function facto(n) {
  var fact = 1;
  for (var i = 1; i <= n; i++) {
    fact = fact * i;
  }
  return fact;
}

var result = facto(6);

console.log(result);
```

**While Loop & Function**

```js
var i = 1;

var factorial = 1;

while (i <= 10) {
  factorial = factorial * i;
  console.log(i, factorial);
  i++;
}

console.log(factorial);

/* ==================== */

function facto(n) {
  var i = 1;

  var fact = 1;

  while (i <= n) {
    fact = fact * i;
    // console.log(i, fac);
    i++;
  }
  return fact;
}

var result = facto(10);

console.log(result);
```

**Recursive Function**

```js
// for (var i = 10; i >= 1; i--) {}
// 5! = 1*2*3*4*5
// 5! = (5-1)! * 5

function factorial(m) {
  if (m == 0) {
    return 1;
  } else {
    return m * factorial(m - 1);
  }
}

var res = factorial(10);

console.log(res);

const num = 5;

const result = factorial(num);

console.log(`The factorial of ${num} is: ${result}`);
```

##

## 15. Fibonacci Sequence

```js
// fibonacci[2] = fibonacci[2-1]+fibonacci[2-2];
// fibonacci[3] = fibonacci[3-1]+fibonacci[3-2];
// fibonacci[4] = fibonacci[4-1]+fibonacci[4-2];
// fibonacci[5] = fibonacci[5-1]+fibonacci[5-2];
// fibonacci[6] = fibonacci[6-1]+fibonacci[6-2];

function fibonacciSequence(n) {
  var fibonacci = [0, 1];
  for (var i = 2; i <= n; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    // console.log(fibonacci[i], fibonacci[i - 1], fibonacci[i - 2]);
  }
  return fibonacci;
}

var result = fibonacciSequence(12);

console.log(result);
```

**Recursive Function**

```js
function Recursive(m) {
  if (m == 0) {
    return 0;
  }
  if (m == 1) {
    return 1;
  } else {
    return Recursive(m - 1) + Recursive(m - 2);
  }
}

var result = Recursive(10);

console.log(result);
```

**Find nth Element with Recursive Function**

```js
function fibonacci(n) {
  if (n == 0) {
    return [0];
  } else if (n == 1) {
    return [0, 1];
  } else {
    var fib = fibonacci(n - 1);
    var nextElement = fib[n - 1] + fib[n - 2];
    fib.push(nextElement);
    return fib;
  }
}

var result = fibonacci(10);

console.log(result);
```

## 🎯

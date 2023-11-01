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
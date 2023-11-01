// For Loop & Function

var factorial = 1;

for (var i = 1; i <= 10; i++) {
    factorial = factorial * i;
    console.log(i, factorial);
}

function facto(n) {
    var fact = 1;
    for (var i = 1; i <= n; i++) {
        fact = fact * i;
    }
    return fact;
}

var result = facto(6);

console.log(result);

/* ==================== */

// While Loop & Function

var i = 1;

var factorial = 1;

while (i <= 10) {
    factorial = factorial * i;
    console.log(i, factorial);
    i++;
}

console.log(factorial);

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

/* ==================== */

// Recursive Function

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
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

/* ==================== */

// Recursive Function

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

/* ==================== */

// Find nth Element with Recursive Function

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
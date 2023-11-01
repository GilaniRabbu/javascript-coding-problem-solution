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
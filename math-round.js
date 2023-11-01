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
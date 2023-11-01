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
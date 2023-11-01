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
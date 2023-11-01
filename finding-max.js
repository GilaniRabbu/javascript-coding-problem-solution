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
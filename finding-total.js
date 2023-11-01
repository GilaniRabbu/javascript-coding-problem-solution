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
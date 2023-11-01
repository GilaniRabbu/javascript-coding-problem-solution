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
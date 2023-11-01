function reverseStr(str) {
    var reverse = "";

    for (let i = 0; i < str.length; i++) {
        var char = str[i];
        reverse = char + reverse;
    }

    return reverse;
}

var statement = "Hello New World";

console.log(reverseStr(statement));

var newState = reverseStr("New Connection for new tech");

console.log(newState);
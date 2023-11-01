// Word Count

var speech = "I  am a  good person.  I don't snore at night.";

var count = 0;

for (var i = 0; i < speech.length; i++) {
    var char = speech[i];
    // if (char == " ") {} // If not have many space
    if (char == " " && speech[i - 1] != " ") {
        count++;
    }
}

count++;

console.log(count);
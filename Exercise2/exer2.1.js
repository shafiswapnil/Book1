// PROBLEM: remove repeated words from a sentence
// SOLVE:
function nonRepeat(sentence) {
    var output = [];
    for (var i = 0; i < sentence.length; i++) {
        var letter = sentence[i];
        if (output.indexOf(letter) == -1) {
            output = output + letter;
        }
    }
    return output;
}

var sentence = "I am a good boy";
console.log(nonRepeat(sentence));

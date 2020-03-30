// PROBLEM: remove repeated words from a sentence
// SOLVE:
function nonRepeat(sample) {
    var newText = [];
    for (var i = 0; i < sample.length; i++) {
        var word = sample[i];
        if (newText.indexOf(word) == -1) {
            newText.push(word);
        }
    }
    return newText;
}

var sample = "I am a good boy";
// var sample = ["Hello", "world!"];
// var sample = ["H", 'H', 'H', 'E', 'L', 'L', 'O'];
console.log(nonRepeat(sample));

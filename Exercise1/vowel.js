// identify vowel words
function vowel(sentence) {
	var count = 0;
	for (var i = 0; i < sentence.length; i++) {
		if (
			sentence[i] == "a" || sentence[i] == "e" || sentence[i] == "i" || sentence[i] == "o" || sentence[i] == "u"
		) {
			count++;
		}
	}
	return count;
}

var output = vowel("My name is Swapnil. I have some work to do.");
console.log(output);

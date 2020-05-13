function reverse(word) {
	var reverseWord = "";
	for (var i = word.length - 1; i >= 0; i--) {
		var letter = word[i];
		reverseWord = reverseWord + letter;
	}
	return reverseWord;
}

function reverseInPlace(text) {
	var words = text.split(" ");
	var reversed = [];

	for (var i = 0; i < words.length; i++) {
		var word = words[i];
		var wordReversed = reverse(word);
		reversed.push(wordReversed);
	}

	var reverseText = reversed.join(" ");

	return reverseText;
}

console.log(reverseInPlace("I am good boy"));
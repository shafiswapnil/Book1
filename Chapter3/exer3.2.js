/* function reverseSentence(text) {
	var reverseText = "";
	var words = text.split(" ");

	for (var i = words.length - 1; i >= 0; i--) {
		var word = words[i];
		reverseText = reverseText + " " + word;
	}

	return reverseText;
} */

// Alternative Solution
function reverseSentence(text) {
	var words = text.split(" ");
	var reversed = words.reverse();
	var reversedText = reversed.join(" ");
	return reversedText;
}

console.log(reverseSentence("I am a good boy"));
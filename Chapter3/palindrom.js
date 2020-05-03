// check palindrom

function reverse(input) {
	var reverseWord = "";
	for ( var i = input.length-1; i >= 0; i-- ) {
		var letter = input[i];
		reverseWord = reverseWord + letter;
	}
	return reverseWord;
}

function palindrom(word) {
	var result;
	var process = reverse(word);
	if ( process == word ) {
		result = word + " is a palindrom";
	} else {
		result = word + " is not a palindrom.";
	}
	return result;
}

console.log(palindrom("eye"));
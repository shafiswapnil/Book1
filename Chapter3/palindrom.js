/* PROBLEM: (exercise 3.1)
 * There are words, If we reverse them, it doesn't change. It stays the same.
 * Like, madam, civic, eye, refer, rotator. These words are called Palindrom.
 * So, now write a function which can take these words as input and after reversing 
 * it should return if the word is palindrom or not.
 * 
 * SOLUTION:
*/

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
		result = word + " is a palindrom.";
	} else {
		result = word + " is not a palindrom.";
	}
	return result;
}

console.log(palindrom("eye"));
console.log(palindrom("madam"));
console.log(palindrom("civic"));
console.log(palindrom("rotator"));
console.log(palindrom("refer"));
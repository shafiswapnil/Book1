function wordCount(sentence) {
	var count = 0;
	for (var i = 0; i < sentence.length; i++) {
		if (sentence[i] == " " && sentence[i - 1] !== " ") {
			count++;
		}
	}
	count++;
	return count;
}

var output = wordCount("This   is    a    text with too   many   spaces");
console.log(output);

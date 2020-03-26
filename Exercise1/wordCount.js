/*
var boktrita = "Agami eid er por andolon hobe.";
var count = 0;

for (var i = 0; i < boktrita.length; i++) {
	if (boktrita[i] == " ") {
		count++;
	}
}

count++;
console.log(count);
*/

function wordCount(boktrita) {
	var count = 0;

	for (var i = 0; i < boktrita.length; i++) {
		if (boktrita[i] == " ") {
			count++;
		}
	}
	count++;
	return count;
}

console.log(wordCount("amar ghor ajke ghusbe."));

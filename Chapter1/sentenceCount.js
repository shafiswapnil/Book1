function sentenceCount(paragraph) {
	var count = 0;

	for (var i = 0; i < paragraph.length; i++) {
		if (paragraph[i] == "." || paragraph[i] == "!" || paragraph[i] == "?") {
			count++;
		}
	}
	return count;
}

// var paragraph =
// 	"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to";

var output = sentenceCount("I'm so happy that i forgot my name!!!!");
console.log(output);

/* Problem
 * when I add more than one (!) or (?) or (.) in one sentence,
 * it assumes that theres more than one sentence
 */

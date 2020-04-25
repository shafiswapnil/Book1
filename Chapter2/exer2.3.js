/* Problem:
 * Assume that, you have an array called Names. There are more than 5 elements in it. Now,
 * you have to find the repeated ones but with a condition, which is - Keep the elements 
 * who are odd times repeated and ignore the even ones.
 * 
 * SOLUTION:
*/

function getOddTimesRepeated(names) {
	var uniqueNames = [];
	var output = [];
	var nameCount = {};

	for ( var i = 0; i < names.length; i++ ) {
		var name = names[i];
		if ( uniqueNames.indexOf(name) == -1 ) {
			uniqueNames.push(name);
			nameCount[name] = 1;
		} else {
			nameCount[name] = nameCount[name] + 1;
		}
	}

	for ( var i = 0; i < uniqueNames.length; i++ ) {
		var name = names[i];
		if ( nameCount[name]%2 != 0 ) {
			output.push(name);
		}
	}

	return output;
}

var names = ["pitu", "ritu", "jitu", "situ", "mitu", "nitu", "bitu", "jitu", "jitu", "bitu", "situ", "mitu", "gitu", "litu"];
console.log(getOddTimesRepeated(names));
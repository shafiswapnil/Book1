function removeDuplicate(names) {
	var selected = [];
	for (var i = 0; i < names.length; i++) {
		var name = names[i];
		if (selected.indexOf(name) == -1) {
			selected.push(name);
		}
	}
	return selected;
}

var output = removeDuplicate([
	"pitu",
	"ritu",
	"jitu",
	"situ",
	"mitu",
	"nitu",
	"bitu",
	"jitu",
	"jitu",
	"bitu",
	"situ",
	"mitu",
	"gitu",
	"litu"
]);
console.log(output);

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

var filterName = removeDuplicate(["pitu", "ritu", "jitu", "situ", "mitu", "nitu", "bitu", "jitu", "jitu", "bitu", "situ", "mitu", "gitu", "litu"]);

var filterNum = removeDuplicate([1, 2, 2, 7, 5, 5, 5, 5, 6, 1, 1, 7, 5, 5, 8, 8, 99, 34, 56, 99]);

console.log(filterName);
console.log(filterNum);

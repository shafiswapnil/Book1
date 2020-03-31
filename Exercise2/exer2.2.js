/**
 * PROBLEM: 
 * Check whether an element is added to selected array when removing duplicate. If already added, it is no longer added. That's why no name is added more than once. This time, write a program where you don't add any element if it has more than one number. That is, if you give him more than one name, you will ignore him.
 */

function getNotRepeated(names) {
    var selected = [];

    for (var i = 0; i < names.length; i++) {
        var name = names[i];
        if (names.indexOf(name) == names.lastIndexOf(name)) {
            selected.push(name);
        }
    }
    return selected;
}

var names = ["pitu", "ritu", "jitu", "situ", "mitu", "nitu", "bitu", "jitu", "jitu", "bitu", "situ", "mitu", "gitu", "litu"];
console.log(getNotRepeated(names));

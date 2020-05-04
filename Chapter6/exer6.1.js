/*
* PROBLEM:
* Make a series of even numbers. like 2+4+6+8+...
*
* SOLUTION:
*/

// In my way 
/*
function series(n) {
	var series = [2, 4];
	for (var i = 2; i <= n; i++) {
		series[i] = series[i - 1] + 2;
	}
	return series;
}

console.log(series(10));
*/

// As answered in website
function evenNumbers(n) {
	var series = [];
	for (var i = 1; i <= n; i++) {
		var element = i * 2;
		series.push(element);
	}
	return series;
}

console.log(evenNumbers(10));
/*
* PROBLEM:
* Make a series of even numbers. like 2+4+6+8+...
*
* SOLUTION:
*/

function series(n) {
	var series = [2, 4];
	for (var i = 2; i <= n; i++) {
		series[i] = series[i - 1] + 2;
	}
	return series;
}

console.log(series(10));
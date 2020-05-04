// Main concept/rule of Fibonacci Series
// n th position = (n-1)th position + (n-2)th position

// Mainly,
// fibo[i] = fibo[i-1] + fibo[i-2]

/*
 // for (var i = 0; i <= n; i++) {
 // 	fibo[i] = fibo[i - 1] + fibo[i - 2];
 // }
 * This code won't work because of two reasons.
 * 1. If you start from i = 0; you'll have to calculate -1 and -2 positions of an array. because of
 * [i-1] and [i-2]
 * 2. As you know from the earlier that there is no array in the world, which has -1 and -2 positions.
 * An array starts from 0 not -1 or -2.
*/

// As you will be running is function, you'll know it's an Iterative function.
function fibonacci(n) {
	var fibo = [0, 1];
	for (var i = 2; i <= n; i++) {
		fibo[i] = fibo[i - 1] + fibo[i - 2];
	}
	return fibo;
}
console.log(fibonacci(10));
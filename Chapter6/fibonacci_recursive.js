function fibonacci(n) {
	if (n <= 1) {
		return;
	}
	return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(10));

/*
* Ques. Can you determine this fibonacci series in recursive way?
* Ans. No. (Remember, you have to think before you answer.)
*
* Ques. What's the time complexity of fibonacci series in recursive way?
* Ans. O(2^n) [for more info: www.habluderadda.com/gosti/fiboTime.html]
*/
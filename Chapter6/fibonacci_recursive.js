function fibonacci(n) {
	if (n <= 1) {
		return;
	}
	return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(10));
// Good and Active Function
// it simply counts till the condition is true
function goodCounter(number) {
	for (var i = 0; i <= number; i++) {
		console.log(i);
	}
}
goodCounter(10);

// Lazy Function
function lazyCounter(number) {
	console.log(number);
}
lazyCounter(10);
lazyCounter(9);
lazyCounter(8);
lazyCounter(7);


function fib(n) {
  if (n == 0) {
    console.log(0);
  } else if (n == 1) {
    console.log(1);
  } else {
    var fib_sequence = [0, 1];
    while (fib_sequence.length <= n) {
      fib_sequence.push(
        fib_sequence[fib_sequence.length - 1] +
          fib_sequence[fib_sequence.length - 2]
      );
    }
    console.log(fib_sequence);
    console.log(fib_sequence[fib_sequence.length - 1]);
  }
}
fib(0);
fib(1);
fib(2);
fib(3);
fib(8);

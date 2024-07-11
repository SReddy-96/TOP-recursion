// Fibonacci number.

// recursion - This is really slow as it make two recursions every time, so the recursion tree is very big
function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

console.log(fib(7));

// Better - This saves the numbers so you don't have to so recursion every time that takes up lots of CPU.
function fibBetter(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

console.log(fibBetter(7))
////Fibonacci sequence
function FibonacciSequence(n) {
  if (typeof n !== "number" || !Number.isInteger(n)) {
    return "Expected integer argument";
  }
  if (n <= 0) return [];
  if (n === 1) return [0];
  const seq = [0, 1];
  for (let i = 2; i < n; i++) {
    seq.push(seq[i - 1] + seq[i - 2]);
    console.log(seq);
  }
  return seq;
}

const num1 = 7;
const num2 = 1;
console.log(`Sequence : ${FibonacciSequence(num1)}`);
console.log(`Sequence : ${FibonacciSequence(num2)}`);

///////////////////////////////
////Fibonacci number at the given position
function fib(n) {
  if (typeof n !== "number" || !Number.isInteger(n)) {
    return "Expected integer argument";
  }
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

const num3 = 3;
const num4 = 10;
console.log(`Fibonacci number at position ${num3} -> ${fib(num3)}`);
console.log(`Fibonacci number at position ${num4} -> ${fib(num4)}`);

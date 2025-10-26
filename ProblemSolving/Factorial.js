function factorial(n) {
  if (n === undefined) {
    return "Missing argument: n is required";
  }
  if (typeof n !== "number" || !Number.isFinite(n)) {
    return "Input must be a finite number";
  }
  if (!Number.isInteger(n)) {
    return "Input must be an integer";
  }
  let fact = 1;
  if (n < 0) return "Factorial is undefined for negative integers";
  for (let i = 1; i <= n; i++) {
    fact = fact * i;
  }
  return fact;
}

console.log(factorial());
//console.log(factorial(7));

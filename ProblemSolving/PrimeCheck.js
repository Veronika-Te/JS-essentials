function primeCheck(num) {
  if (num === undefined) {
    return "Missing argument: n is required";
  }
  if (typeof num !== "number" || !Number.isFinite(num)) {
    return "Input must be a finite number";
  }
  if (!Number.isInteger(num)) {
    return "Input must be an integer";
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) return false;
  }
  return true;
}

const num1 = 7;
const num2 = 17;
const num3 = 16;

//console.log(primeCheck());
console.log(primeCheck(num1));
console.log(primeCheck(num2));
console.log(primeCheck(num3));

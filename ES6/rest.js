// Rest Operator

// Rest in Function Parameters

// Handle flexible arguments
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(5, 10, 15, 20)); // 50
// Use rest when you don’t know how many arguments will be passed

// Rest Operator
// The rest operator (...) collects multiple values into one variable

// Rest in Function Parameters

// Handle flexible arguments
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(5, 10, 15, 20)); // 50
// Use rest when you don’t know how many arguments will be passed

// Rest with Array Destructuring
const numbers = [1, 2, 3, 4, 5];

const [first, second, ...rest] = numbers;

console.log(first);  // 1
console.log(second); // 2
console.log(rest);   // [3, 4, 5]

// Rest with Object Destructuring

// Extract specific fields, collect the rest
const user = {
  id: 1,
  name: "jhon",
  age: 18,
  university: "Elfarizi University",
};

const { name, ...others } = user;

console.log(name);    // jhon
console.log(others); // { id: 1, age: 18, university: "Elfarizi University" }

// Common Mistakes (Important)

// Rest must be last
const [ ...rest, last ] = numbers; // Error

// Correct
const [ first, ...rest ] = numbers;


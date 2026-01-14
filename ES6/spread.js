// Spread Operator (Arrays)

// Copy an array (no mutation)
const number = [1, 2, 3];
const copy = [...number];

console.log(copy); // [1, 2, 3]

// Merge arrays
const a = [1, 2, 3];
const b = [4, 5, 6];

const merged = [...a, ...b];
console.log(merged); // [ 1, 2, 3, 4, 5, 6 ]

// Spread Operator (Objects)

// Clone an object
const user = { name: "Elfarizi", age: 18 };
const clonedUser = { ...user };

console.log(clonedUser); // { name: 'Elfarizi', age: 18 }

// Update object without mutation
const updatedUser = { ...user, age: 20 };

console.log(user); // { name: 'Elfarizi', age: 18 }
console.log(updatedUser); // { name: 'Elfarizi', age: 20 }

// Spread in Function Calls
const numbers = [1, 2, 3];

function sum(a, b, c) {
  return a + b + c;
}

console.log(sum(...numbers)); // 6

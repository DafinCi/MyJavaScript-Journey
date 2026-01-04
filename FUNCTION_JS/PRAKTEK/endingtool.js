/**
 You should create a function named confirmEnding that takes two parameters: the string to check and the string to check against.
The function should return true if the first string ends with the second string, and false otherwise.
You should not use the .endsWith() method; instead, use one of the JavaScript substring methods to achieve this.

 */

function confirmEnding(string1, string2) {
  if (string1.slice(-string2.length) === string2) {
    return true;
  } else {
    return false;
  }
}

const sum = (num1, num2) => num1 + num2;
console.log(sum(0, 0) + 10);

const exampleFunction = (param1, param2) => param1 + param2;
console.log(exampleFunction(3, "Something"));

const sum2 = (num1, num2) => num1 + num2;
console.log(sum2(0, 0) + num2);

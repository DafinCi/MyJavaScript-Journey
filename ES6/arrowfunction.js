review arrow function
_Elfarizi

Regular function
function add(a, b) {
  return a + b;
}

// Arrow function
const add2 = (a, b) => a + b;
console.log(add2(5, 4)); // 9
// If there’s only one expression, it returns automatically (implicit return)

// If you need multiple statements, use {} and return:
const multiply = (a, b) => {
  const result = a * b;
  return result;
};
console.log(multiply(4, 8)); // 32

// arrow function gapunya atribut this yang berfungsi sebagai callbacks
const person = {
  name: "dapin",
  greet: function () {
    setTimeout(() => {
      console.log(`Hello ${this.name}`);
    }, 1000);
  },
};

// person.greet();

// challange dari gpt

// arrow function
// nomor 1
const square = (n) => {
  return n * n;
};
console.log(square(5));
// nomor 2
const greet = (nama) => {
  return `Hello, ${nama}`;
};
console.log(greet("dapin"));
// destructing
// nomor 3
const user = {
  id: 1,
  username: "bos",
  email: "bos@example.com",
};

const { username, email } = user;
console.log(username, email);
// nomor 4
const numbers = [10, 20, 30, 40];
const [satu, , tiga] = numbers;
console.log(satu, tiga);
// map / filter
// nomor 5
const arr = [1, 2, 3, 4, 5];
const triple = arr.map((n) => n * 3);
console.log(triple);
// nomor 6
const arr2 = [10, 15, 20, 25];
const lebih15 = arr2.filter((n) => n > 15);
console.log(lebih15);
// nomor 7
const arr3 = [1, 2, 3, 4, 5];
const genap = arr3.filter((n) => n % 2 === 0).map((n) => n * 10);
console.log(genap);

// nomor 8
export const add = (a, b) => a + b;
export const multiply = (a, b) => a * b;


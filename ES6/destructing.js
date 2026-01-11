// destructing memudahkan untuk mengekstrak value dari array atau objects ke dalam variable

// destructing di array

// const numbers = [1, 2, 3, 4, 5];
// const [satu, dua] = numbers;

// console.log(satu, dua); // 1, 2

// // skip value dengan koma
// const [, , tiga] = numbers;
// console.log(tiga);

// //  DESTRUCRING DI OBJECT

// const person = {
//   name: "dapin",
//   age: 20,
//   uni: "UMS",
// };

// const { name, age } = person;
// console.log(name, age);

// // ganti nama variable

// const { name: nickname } = person;
// console.log(nickname);

// // nested destructing

// const user = {
//   id: 1,
//   age: 21,
//   profile: {
//     name2: "fizi",
//     uni2: "UMS",
//     bach: "Teknik Informatika",
//   },
// };

// const {
//   profile: { name2, uni2 },
// } = user;

// console.log(name2, uni2);

// konten

// _elfarizi - Destructing

// Basic example

const numbers = [1, 2, 3, 4, 5];
const [first, second] = numbers;
console.log(first, second); // 1 2

// Skipping values

const [, , third] = numbers;
console.log(third); // 3
// Use commas to skip elements you don’t need

// _elfarizi - Object Destructing

// Basic example

const person = {
  name: "Elfarizi",
  age: 18,
  university: "Elfarizi University",
};
const { name, age } = person;
console.log(name, age); // elfarizi 18

// Renaming Variables

const { name: nickname } = person;
console.log(nickname); // Elfarizi

// _elfarizi - Nested Object Destructuring
// Common in API responses and React props

const user = {
  id: 1,
  age: 18,
  profile: {
    fullName: "Jhon",
    university: "Elfarizi University",
    major: "Computer Science",
  },
};

const {
  profile: { fullName, university },
} = user;

console.log(fullName, university); // Jhon Elfarizi Universtity

/*
 * Key Takeaway

  if you often write: 
    user.profile.fullName
    user.profile.university

  You should be using destructing
 */

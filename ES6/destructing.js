// destructing memudahkan untuk mengekstrak value dari array atau objects ke dalam variable

// destructing di array

const numbers = [1, 2, 3, 4, 5];
const [satu, dua] = numbers;

console.log(satu, dua); // 1, 2

// skip value dengan koma
const [, , tiga] = numbers;
console.log(tiga);

//  DESTRUCRING DI OBJECT

const person = {
  name: "dapin",
  age: 20,
  uni: "UMS",
};

const { name, age } = person;
console.log(name, age);

// ganti nama variable

const { name: nickname } = person;
console.log(nickname);

// nested destructing

const user = {
  id: 1,
  age: 21,
  profile: {
    name2: "fizi",
    uni2: "UMS",
    bach: "Teknik Informatika",
  },
};

const {
  profile: { name2, uni2 },
} = user;

console.log(name2, uni2);

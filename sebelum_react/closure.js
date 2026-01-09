// belajar closure  (fondasi state dan hook)

// intinya closure menyimpan referensi

// challange dari gpt
// nomor 1
function outer() {
  let secret = "JS";

  return function inner() {
    return secret;
  };
}

const fn = outer();
// 1. karena fn() mengingat environment dia dibuat
// 2. yang disimpannya adalah referensi

// nomor 2
function add() {
  let count = 0;
  return () => ++count;
}

const tambah = add();
console.log(tambah());
console.log(tambah());
console.log(tambah());

// nomor 3
function multiply(x) {
  return (y) => x * y;
}

const kali = multiply(2);
const kali2 = multiply(5);
console.log(kali(4));
console.log(kali2(4));

let user = { name: "Bos" };
let user2 = user;

user2.name = "Dapin";
console.log(user.name);

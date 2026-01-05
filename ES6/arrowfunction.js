// review arrow function

// biasanya  nulis function kan gini

function add(a, b) {
  return a + b;
}

// klo pake arrow function

const add2 = (a, b) => a + b;

console.log(add2(5, 4));

// klo hanya satu ekspresi bakal otomatis return implisit  (gausah nulis return)
// klo mau lebih dari satu statement maka pake kurung kurawal dan return

const multiply = (a, b) => {
  const result = a * b;
  return result;
};

console.log(multiply(4, 8));

// arrow function gapunya atribut this yang berfungsi sebagai callbacks

const person = {
  name: "dapin",
  greet: function () {
    setTimeout(() => {
      console.log(`Hello ${this.name}`);
    }, 1000);
  },
};

person.greet();

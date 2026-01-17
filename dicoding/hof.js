// high order function adalah function yang menerima function lain sebagai argumen

function apply(fn, ...args) {
  return fn(...args);
}

function sum(a, b, c, d) {
  return a + b + c + d;
}

function disc(disc, value) {
  return (disc / 100) * value;
}

const test1 = apply(sum, 1, 2, 3, 4);
const test2 = apply(disc, 50, test1);

console.log(test1);
console.log(test2);

// teknik Memoization

// teknik currying
// ngambil satu argumen lalu mengembalikan fungsi yang menerima argumen kedua

function adjectivfy(adjectiv) {
  return function (noun) {
    return `${adjectiv} ${noun}`;
  };
}

function multiply(x) {
  return function (y) {
    return x * y;
  };
}

const nama = adjectivfy("dapin");
const tes = multiply(2);

console.log(nama("ganteng"));
console.log(tes(2));

// komposisi fungsi
// menggabungkan beberapa fungsi kecil menjadi satu fungsi yang lebih kompleks

function addOne(x) {
  return x + 1;
}

function square(x) {
  return x * x;
}

function compose(f, g) {
  return (x) => {
    return f(g(x));
  };
}

const tes2 = compose(square, addOne);
console.log(tes2(2));

// secara ga sadar sebenernya kalo pake .map itu  juga udah pake teknik hof

const numbers = [1, 2, 3, 4, 5, 6];

const doubled = numbers.map((x) => x * 2);

console.log(doubled);

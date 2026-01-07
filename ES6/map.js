// method array untuk mengubah dan memfilter data

// Elfarizi
const number = [1, 2, 3, 4, 5];

// map() - transforms each element into something new:
const doubled = number.map((n) => n * 2);
console.log(doubled); // [ 2, 4, 6, 8, 10 ]

// filter() - filters elements based on a condition:
const odd = number.filter((n) => n % 2 === 1);
console.log(odd); // [ 1, 3, 5 ]

// you can combine them
const result = number.filter((n) => n % 2 === 0).map((n) => n * 10);
console.log(result); // [ 20, 40 ]

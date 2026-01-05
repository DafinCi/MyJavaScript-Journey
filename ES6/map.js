// method array untuk mengubah dan memfilter data

// map() - menguabah tiap elemen array menjadi baru

const number = [1, 2, 3, 4, 5];
const ubah = number.map((n) => n * 2);
console.log(ubah);

// filter() - filter elemen sesuai kondisi
const ganjil = number.filter((n) => n % 2 === 1);
console.log(ganjil);

// kita juga bisa menggabungkannya

const result = number.filter((n) => n % 2 === 0).map((n) => n + 1);

console.log(result);

// kita bisa menerapkan prinsip immutability dengan fungsi yang mengembalikan salinan baru

// sebelum menerapkan immutability kita harus memperhatikan method" haram di prinsip ini

/*
Array.push: menambahkan elemen di akhir dari sebuah array.
Array.pop: menghapus elemen terakhir dari sebuah array.
Array.shift: menghapus elemen pertama dari sebuah array.
Array.unshift: menambahkan elemen di awal dari sebuah array.
Array.splice: menambahkan atau menghapus elemen di posisi tertentu dari sebuah array.
Array.reverse: membalikkan urutan elemen dari sebuah array.
Array.sort: mengurutkan elemen dari sebuah array.
Object.assign: memodifikasi properti dari object.

 */

// lalu apa solusinya dong?

// MENDUPLIKASINYA ALIH ALIH MENGUBAH ASLINYA
// kita tidak boleh memodifikasi nilai yang diberikan melalui argumen

// pake spread operator
// pakai .map
const oldArray = ["Harry", "Ron", "Jeff", "Thomas"];
const newArray = oldArray.map((name) => `${name}!!`);
console.log(newArray);
console.log(oldArray);
// pakai .filter (cara kerja nya seperti map, tapi setiap callback harus mengembalikan boolean)
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const campuran_bool = [1, "", 0, null, false, true, "hai"];
const filtered = numbers.filter((x) => x % 2 === 0);
const filtered2 = campuran_bool.filter((x) => Boolean(x));
console.log(filtered);
console.log(filtered2);

// pake .reduce

// IMMUTABLE OBJECT

// pake Object.freeze

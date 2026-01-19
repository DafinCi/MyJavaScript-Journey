// belajar asinkronus di dicoding

// asinkronus adalah proses yang dapat dieksekusi secara paralel

import { makeCoffee, sendCoffe } from "./asinkronus2.js";

console.log("Saya memesan kopi di kafe.");

// penanganan dengan callback()
makeCoffee(() => {
  sendCoffe(() => {
    console.log("pramusaji memberikan kopi pesanan");
    console.log("saya mendapatkan kopi dan menghabiskannya");
  });
});

// ini file untuk mengimport fungsi di file modules.js

import bagi, { tambah, kurang } from "./modules.js";

console.log(tambah(2, 3));
console.log(kurang(2, 3));
console.log(bagi(2, 3));

// di file main.js nomor 9
import { add, multiply2 } from "./arrowfunction.js";

console.log(add(3, 5));
console.log(multiply2(3, 5));

//  nomor 10
// default export namanya bisa diganti ketika diimport
// named export namanya gabisa diubah dan harus ditulis didalam kurung kurawal

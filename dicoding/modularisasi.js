// ngambil fungsi dari file lain

// import namaFungsi from './filenya.js'
// namaFungsi()

import myFunction from "./testmodul.js";

// klo import named function harus di dalam kurung kurawal

// import { tambah } from "./testmodul.js";

// import { name, email, age } from "./testmodul.js";

// bisa juga pake gini *

import * as data from "./testmodul.js";

myFunction();
console.log(data.tambah(1, 7));
console.log(data.name);
console.log(data.age);
console.log(data.email);

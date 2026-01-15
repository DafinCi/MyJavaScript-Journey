// biar ada default nama fungsi

export default function myFunction() {
  console.log("ini dari file testmodul.js");
}

// untuk fungsi yang  diberi nama, jadi ketika ada yang import harus pake nama ini
export function tambah(a, b) {
  return a + b;
}

const name = "elfarizi";
const age = 20;
const email = "dotcom";

export { name, age, email };

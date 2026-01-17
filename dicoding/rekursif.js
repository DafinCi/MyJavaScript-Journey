// aku memanggil diriku sendiri (rekursif)

// di dunia FP tidak ada yang namanya perulangan menggunakan for atau while

function generateArr(n) {
  if (n < 0) {
    return [];
  }

  return [...generateArr(n - 1), n];
}

console.log(generateArr(10));

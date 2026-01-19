// aku memanggil diriku sendiri (rekursif)

// di dunia FP tidak ada yang namanya perulangan menggunakan for atau while

function generateArr(n) {
  if (n < 0) {
    return [];
  }

  return [...generateArr(n - 1), n];
}

console.log(generateArr(10));

// rekursi adalah tenik yang manjur
// yang jadi tantangan adalah kita harus membiasakan berpikir berbeda, yang awalnya imperatif jadi deklaratif

// untungnya JS sudah menyediakan method kek .map, .filter, forEach dibalik layar cara kerja mereka sama sepert rekursif yaitu immutability

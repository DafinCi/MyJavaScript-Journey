function fearNotLetter(letters) {
  for (let i = 0; i <= letters.length - 1; i++) {
    if (letters[i + 1].charCodeAt(0) - letters[i].charCodeAt(0) !== 1) {
      let hasil = letters[i].charCodeAt(0) + 1;
      return String.fromCharCode(hasil);
    }
  }
}

console.log(fearNotLetter("abce"));

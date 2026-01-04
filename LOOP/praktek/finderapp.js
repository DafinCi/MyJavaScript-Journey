function findLongestWordLength(sentence) {
  let words = sentence.split(" ");
  let longest = "";

  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest.length;
}

let hasil = findLongestWordLength("tes aja cuma cobacoba");

console.log(hasil);

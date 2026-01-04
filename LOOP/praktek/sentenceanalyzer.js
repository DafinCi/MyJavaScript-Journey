function getVowelCount(sentence) {
  let count = 0;
  let vowel = ["a", "i", "u", "e", "o", "A", "I", "U", "E", "O"];
  for (let i of sentence) {
    if (vowel.includes(i)) {
      ++count;
    }
  }
  return count;
}

let hasil = getVowelCount("hello");
console.log(hasil);

function getConsonantCount(sentence) {
  const vowel = "aiueo ";
  let count = 0;
  for (let char of sentence.toLowerCase()) {
    if (/[a-z]/.test(char) && !vowel.includes(char)) {
      count++;
    }
  }
  return count;
}

let hasil2 = getConsonantCount("Hello, World!"); // harus 7
console.log(hasil2);

function getPunctuationCount(sentence) {
  const punc = "!@#$%^&*(),.?\":{}|<>;'-_[]/\\`~";
  let count = 0;
  for (let char of sentence) {
    if (punc.includes(char)) {
      count++;
    }
  }
  return count;
}

let hasil3 = getPunctuationCount("helllo! ");
console.log(hasil3);

function getWordCount(sentence) {
  if (sentence.trim() === "") {
    return 0;
  }

  const words = sentence.trim().split(/\s+/);
  return words.length;
}

let hasil4 = getWordCount("When are you gonna start learning to code?");
console.log(hasil4);

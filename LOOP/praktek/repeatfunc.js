function repeatStringNumTimes(str, num) {
  let hasil = [];
  if (num <= 0) {
    return "";
  }
  for (let i = 1; i <= num; i++) {
    hasil.push(str);
  }
  return hasil.join("");
}

console.log(repeatStringNumTimes("a", 0));

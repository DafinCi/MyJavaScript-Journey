function mutation(arr) {
  let arr1 = arr[0].toLowerCase();
  let arr2 = arr[1].toLowerCase();
  for (let char of arr2) {
    if (arr1.includes(char)) {
    } else {
      return false;
    }
  }
  return true;
}
let hasil = mutation(["hello", "hey"]);
console.log(hasil);

hasil = mutation(["hello", "Hello"]);
console.log(hasil);

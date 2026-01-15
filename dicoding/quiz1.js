import unique from "./quiz2.js";
import { splitString } from "./quiz2.js";

const string = "saippuakivikauppias";
const array = splitString(string);
const uniqueArray = unique(array);

console.log(string);
console.log(array);
console.log(uniqueArray);

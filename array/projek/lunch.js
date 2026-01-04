/**
 You should create a lunches variable and assign it an empty array that will be used to store lunch items.

You should create a function addLunchToEnd that takes an array as the first argument and a string as the second argument. The function should:

Add the string to the end of the array.
Log the string "[Lunch Item] added to the end of the lunch menu." to the console, where [Lunch Item] is the string passed to the function.
Return the updated array.
You should create a function addLunchToStart that takes an array as the first argument and a string as the second argument. The function should:

Add the string to the start of the array.
Log the string "[Lunch Item] added to the start of the lunch menu." to the console, where [Lunch Item] is the string passed to the function.
Return the updated array.
You should create a function removeLastLunch that takes an array as its argument. The function should:

Remove the last element from the array.
If the removal is successful, log the string "[Lunch Item] removed from the end of the lunch menu." to the console, where [Lunch Item] is the element removed from the array.
If the array is empty, log the string "No lunches to remove." to the console.
Return the updated array.
You should create a function removeFirstLunch that takes an array as its argument. The function should:

Remove the first element from the array.
If the removal is successful, log the string "[Lunch Item] removed from the start of the lunch menu." to the console, where [Lunch Item] is the element removed from the array.
If the array is empty, log the string "No lunches to remove." to the console.
Return the updated array.
You should create a function getRandomLunch that takes an array as its argument. The function should:

Select a random element from the array.
If successful, log the string "Randomly selected lunch: [Lunch Item]" to the console, where [Lunch Item] is a random element in the array.
If the array is empty, log the string "No lunches available." to the console.
You should create a function showLunchMenu that takes an array as its argument and:

If there are elements in the array, logs the string "Menu items: [Lunch Item], [Lunch Item]..." to the console, where each [Lunch item] is one of the elements in the array, in order.
If the array is empty, logs the string "The menu is empty." to the console.

 */

const lunches = [];

function addLunchToEnd(array, string) {
  array.push(string);
  console.log(`${string} added to the end of the lunch menu.`);
  return array;
}
function addLunchToStart(array, string) {
  array.unshift(string);
  console.log(`${string} added to the start of the lunch menu.`);
  return array;
}

function removeLastLunch(array) {
  if (array.length === 0) {
    console.log("No lunches to remove.");
  } else {
    const hapus = array.pop();
    console.log(`${hapus} removed from the end of the lunch menu.`);
  }
  return array;
}

function removeFirstLunch(array) {
  if (array.length === 0) {
    console.log("No lunches to remove.");
  } else {
    array.shift();
    console.log(`${array} removed from the start of the lunch menu.`);
    return array;
  }
}

function getRandomLunch(array) {
  if (array.length === 0) {
    console.log("No lunches available.");
  } else {
    const random = Math.floor(Math.random() * array.length);
    console.log(`Randomly selected lunch: ${array[random]}`);
  }
}

function showLunchMenu(array) {
  if (array.length === 0) {
    console.log("The menu is empty.");
  } else {
    console.log(`Menu items: ${array}`);
  }
}

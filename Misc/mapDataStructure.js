/*
Problem Name: Dictionaries and Maps
Problem Details: https://www.hackerrank.com/challenges/30-dictionaries-and-maps/problem
Difficulty: Easy
*/

// Main Function
function processData(input) {
  let cleanInput = input.split("\n").join(" ").split(" ");
  let phoneBook = new Map();
  let numberOfEntries = parseInt(cleanInput[0]);
  cleanInput.splice(0, 1);
  for (let i = 0, k = 0; k < numberOfEntries; i++) {
    phoneBook.set(cleanInput[i + k], cleanInput[i + k + 1]);
    k++;
  }
  cleanInput.splice(0, numberOfEntries + numberOfEntries);
  for (let j = 0; j < cleanInput.length; j++) {
    phoneBook.has(cleanInput[j])
      ? console.log(`${cleanInput[j]}=${phoneBook.get(cleanInput[j])}`)
      : console.log("Not found");
  }
}

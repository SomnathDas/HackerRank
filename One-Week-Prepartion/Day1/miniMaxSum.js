/*
Problem Name: Mini Max Sum
Problem Details: https://www.hackerrank.com/challenges/one-week-preparation-kit-plus-minus/problem?h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-one
Difficulty: Easy
*/

// Boilerplate
"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

// Main Function
function miniMaxSum(arr) {
  let arrangedArray = arr.sort();
  let max = 0;
  let min = 0;
  for (let i = 0; i < arrangedArray.length - 1; i++) {
    min += arrangedArray[i];
  }
  for (let i = 1; i < arrangedArray.length; i++) {
    max += arrangedArray[i];
  }
  console.log(min, max);
}

// Engine
function main() {
  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  miniMaxSum(arr);
}

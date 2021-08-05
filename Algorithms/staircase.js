/*
Problem Name: Staircase
Problem Details: https://www.hackerrank.com/challenges/staircase/
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
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

// Main Function
function staircase(n) {
  let spaces = " ".repeat(n - 1);
  let symbol = "#";
  for (let i = 1; i <= n; i++) {
    console.log(`${spaces}${symbol}`);
    spaces = spaces.slice(0, spaces.length - 1);
    symbol += "#";
  }
}

// Engine
function main() {
  const n = parseInt(readLine().trim(), 10);

  staircase(n);
}

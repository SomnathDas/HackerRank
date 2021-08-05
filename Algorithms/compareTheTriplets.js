/*
Problem Name: Compare The Triplets
Problem Details: https://www.hackerrank.com/challenges/compare-the-triplets
Difficulty: Easy
*/

// Boilerplate
"use strict";

const fs = require("fs");

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
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

// Main Function
function compareTriplets(a, b) {
  if (a.length && b.length !== 3) throw new Error("Only triplets allowed!");
  let totalPointsOfA = 0;
  let totalPointsOfB = 0;
  for (let i = 0; i <= 3; i++) {
    a[i] > b[i]
      ? (totalPointsOfA += 1)
      : a[i] < b[i]
      ? (totalPointsOfB += 1)
      : 0;
  }
  return [totalPointsOfA, totalPointsOfB];
}

// Engine
function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const a = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((aTemp) => parseInt(aTemp, 10));

  const b = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((bTemp) => parseInt(bTemp, 10));

  const result = compareTriplets(a, b);

  ws.write(result.join(" ") + "\n");

  ws.end();
}

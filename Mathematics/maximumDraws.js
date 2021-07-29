/*
Problem Name: Maximum Draws
Problem Details: https://www.hackerrank.com/challenges/maximum-draws/problem
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
 * Complete the 'maximumDraws' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

// Main Function
function maximumDraws(n) {
  let result = n * 2 - (n - 1);
  return result;
}

// Engine
function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const t = parseInt(readLine().trim(), 10);

  for (let tItr = 0; tItr < t; tItr++) {
    const n = parseInt(readLine().trim(), 10);

    const result = maximumDraws(n);

    ws.write(result + "\n");
  }

  ws.end();
}

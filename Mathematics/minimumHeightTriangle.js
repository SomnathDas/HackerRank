/*
Problem Name: Minimum Height Triangle
Problem Details: https://www.hackerrank.com/challenges/lowest-triangle/problem
Difficulty: Easy
*/

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
 * Complete the 'lowestTriangle' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER trianglebase
 *  2. INTEGER area
 */

// Main Function
function lowestTriangle(trianglebase, area) {
  let heightOfTriangle = 2 * (area / trianglebase);
  return Math.ceil(heightOfTriangle);
}

/* To Learn More:
https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-geometry-topic/cc-6th-area-triangle/v/intuition-for-area-of-a-triangle
*/

// Engine
function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const firstMultipleInput = readLine().replace(/\s+$/g, "").split(" ");

  const trianglebase = parseInt(firstMultipleInput[0], 10);

  const area = parseInt(firstMultipleInput[1], 10);

  const height = lowestTriangle(trianglebase, area);

  ws.write(height + "\n");

  ws.end();
}

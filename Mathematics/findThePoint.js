/*
Problem Name: Find the Point
Problem Details: https://www.hackerrank.com/challenges/find-point/problem
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
 * Complete the 'findPoint' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER px
 *  2. INTEGER py
 *  3. INTEGER qx
 *  4. INTEGER qy
 */

// Main Function
function findPoint(px, py, qx, qy) {
  let rx = qx - px + qx;
  let ry = qy - py + qy;
  return [rx, ry];
}

/* 
To Learn More: 
https://www.khanacademy.org/math/geometry/hs-geo-transformations/hs-geo-reflections/v/determining-reflections
*/

// Engine
function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  for (let nItr = 0; nItr < n; nItr++) {
    const firstMultipleInput = readLine().replace(/\s+$/g, "").split(" ");

    const px = parseInt(firstMultipleInput[0], 10);

    const py = parseInt(firstMultipleInput[1], 10);

    const qx = parseInt(firstMultipleInput[2], 10);

    const qy = parseInt(firstMultipleInput[3], 10);

    const result = findPoint(px, py, qx, qy);

    ws.write(result.join(" ") + "\n");
  }

  ws.end();
}

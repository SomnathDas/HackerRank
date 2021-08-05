/*
Problem Name: Birthday Cake Candles
Problem Details: https://www.hackerrank.com/challenges/birthday-cake-candles
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
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

// Main Function
function birthdayCakeCandles(candles) {
  candles.sort((a, b) => a - b);
  let maxSizeCandles = candles.filter((x) => x == candles[candles.length - 1]);
  return maxSizeCandles.length;
}

// Engine
function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const candlesCount = parseInt(readLine().trim(), 10);

  const candles = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((candlesTemp) => parseInt(candlesTemp, 10));

  const result = birthdayCakeCandles(candles);

  ws.write(result + "\n");

  ws.end();
}

/* Testing
let test = [1, 7, 2, 6, 9, 9, 3];
//console.log(birthdayCakeCandles(test));

let test2 = Array.from({ length: 99999 }, (_, i) => (i = 1000));
let test3 = [...test2, 999];
//console.log(test3);
console.log(birthdayCakeCandles(test3)); */

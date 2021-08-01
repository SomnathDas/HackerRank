/*
Problem Name: Plus Minus
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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

// Main Function
function plusMinus(arr) {
  let positiveNum = 0;
  let negativeNum = 0;
  let zeroNum = 0;
  let totalNum = arr.length;
  let positiveRatio,
    negativeRatio,
    zeroRatio = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      negativeNum++;
    } else if (arr[i] > 0) {
      positiveNum++;
    } else if (arr[i] == 0) {
      zeroNum++;
    }
  }

  positiveRatio = positiveNum / totalNum;
  negativeRatio = negativeNum / totalNum;
  zeroRatio = zeroNum / totalNum;

  console.log(positiveRatio.toFixed(6));
  console.log(negativeRatio.toFixed(6));
  console.log(zeroRatio.toFixed(6));
}

// Engine
function main() {
  const n = parseInt(readLine().trim(), 10);

  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  plusMinus(arr);
}

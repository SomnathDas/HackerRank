/*
Problem Name: Grading
Problem Details: https://www.hackerrank.com/challenges/grading/problem
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
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

// Helper Function
const nearestFiveMultiple = (numArr) => {
  return numArr.map((x) => Math.ceil(x / 5) * 5);
};

// Main Function | Type-I
function gradingStudents(gradesArr) {
  let finalGradesArr = [];
  let nearestFiveArr = nearestFiveMultiple(gradesArr);
  for (let i = 0; i < gradesArr.length; i++) {
    Math.abs(gradesArr[i] - nearestFiveArr[i]) < 3 && gradesArr[i] >= 38
      ? finalGradesArr.push(nearestFiveArr[i])
      : finalGradesArr.push(gradesArr[i]);
  }
  return finalGradesArr;
}

// Main Function | Type-II
function gradingStudents(gradesArr) {
  let finalGradesArr = [];
  let nearestFiveArr = nearestFiveMultiple(gradesArr);
  for (let i = 0; i < gradesArr.length; i++) {
    if (Math.abs(gradesArr[i] - nearestFiveArr[i]) < 3 && gradesArr[i] >= 38) {
      finalGradesArr.push(nearestFiveArr[i]);
    } else {
      finalGradesArr.push(gradesArr[i]);
    }
  }
  return finalGradesArr;
}

// Engine
function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const gradesCount = parseInt(readLine().trim(), 10);

  let grades = [];

  for (let i = 0; i < gradesCount; i++) {
    const gradesItem = parseInt(readLine().trim(), 10);
    grades.push(gradesItem);
  }

  const result = gradingStudents(grades);

  ws.write(result.join("\n") + "\n");

  ws.end();
}

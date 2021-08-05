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
const nearestFiveMultiple = (number) => {
  let n = Math.ceil(number / 5);
  return n * 5;
};

// Main Function | Type-I
function gradingStudents(grades) {
  let finalGrades = 0;
  let nearestFive = nearestFiveMultiple(grades);
  Math.abs(grades - nearestFive) < 3
    ? (finalGrades = nearestFive)
    : grades < 40
    ? (finalGrades = grades)
    : (finalGrades = grades);
  console.log(finalGrades);
  return finalGrades;
}

// Main Function | Type-II
function gradingStudents(grades) {
  let finalGrades = 0;
  let nearestFive = nearestFiveMultiple(grades);
  if (Math.abs(grades - nearestFive) < 3 && grades > 40) {
    finalGrades = nearestFive;
  } else {
    finalGrades = grades;
  }
  return finalGrades;
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

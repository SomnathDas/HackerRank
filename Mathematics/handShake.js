/*
Problem Name: Hand Shake
Problem Details: https://www.hackerrank.com/challenges/handshake/problem
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
 * Complete the 'handshake' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

// Main Function
function handshake(n) {
  if (n == 1) return 0;
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += n - i;
  }
  return result;
}

/* 
Explanation 
[IMPORTANT SENTENCE IN THE PROBLEM] :  
--> If everyone attending shakes hands exactly one time with every other attendee <---

According to the problem,
If there are (n) attendees, (N starting from 1 till n)
Person (N) will shake hand with attendees (n-1), Person (N+1) will shake hand with attendees (n-2), and so on,
To generalize this, 

Number of hands shook by Person N1 = (n-1)
Number of hands shook by Person N2 = (n-2)
Number of hands shook by Person N3 = (n-3)
Number of total handshakes = ((n-1)) + ((n-2)) + ((n-3))... or (N1 + N2 + N3)... and so on

Example (1):
There are 4 attendee(s), so n = 4 

Number of hands shook by Person N1 = (n-1) == 3
Number of hands shook by Person N2 = (n-2) == 2
Number of hands shook by Person N3 = (n-3) == 1
Number of total handshakes = ((n-1)) + ((n-2)) + ((n-3)) == 6

To Learn More about this:
https://www.khanacademy.org/math/precalculus/x9e81a4f98389efdf:prob-comb/x9e81a4f98389efdf:combinatorics-precalc/v/factorial-and-counting-seat-arrangements
*/

// Engine
function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const t = parseInt(readLine().trim(), 10);

  for (let tItr = 0; tItr < t; tItr++) {
    const n = parseInt(readLine().trim(), 10);

    const result = handshake(n);

    ws.write(result + "\n");
  }

  ws.end();
}

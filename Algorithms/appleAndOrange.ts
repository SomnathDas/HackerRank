/*
Problem Name: Apple and Orange
Problem Details: https://www.hackerrank.com/challenges/apple-and-orange/problem
Difficulty: Easy
*/

// Main Function
function countApplesAndOranges(
  s: number,
  t: number,
  a: number,
  b: number,
  apples: number[],
  oranges: number[]
): void {
  let finalApplePositionArr: Number[] = apples.map((x) => a + x);
  let finalOrangePositionArr: Number[] = oranges.map((x) => b + x);
  let numberOfApplesInRange = 0;
  let numberOfOrangesInRange = 0;
  for (let i = 0; i < finalApplePositionArr.length; i++) {
    if (finalApplePositionArr[i] >= s && finalApplePositionArr[i] <= t) {
      numberOfApplesInRange += 1;
    }
  }
  for (let j = 0; j < finalOrangePositionArr.length; j++) {
    if (finalOrangePositionArr[j] >= s && finalOrangePositionArr[j] <= t) {
      numberOfOrangesInRange += 1;
    }
  }
  console.log(numberOfApplesInRange);
  console.log(numberOfOrangesInRange);
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);

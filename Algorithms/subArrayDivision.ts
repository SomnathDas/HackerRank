/*
Problem Name: Sub Array Division
Problem Details: https://www.hackerrank.com/challenges/the-birthday-bar/problem
Difficulty: Easy
*/

// Helper Function
function subset(arr: number[], n: number): any[] {
  let resultArr = []; // Possible Sub Arrays
  for (let i = 0; i < arr.length; i++) {
    /* If endpoint surpass arrays length, then we will return the resultArr,
    so that we don't have any sub array whose length is not equal to n. */
    if (i + (n - 1) >= arr.length) return resultArr;
    // Until then, we are going to keep pushing possible sub arrays
    resultArr.push(arr.slice(i, i + n));
  }
  // Return all possible sub arrays whose length does not surpass n
  return resultArr;
}

// Main Function
function birthday(s: number[], d: number, m: number): number {
  /* Result is the number of ways the chocolate can be divided
  so that it meets the given criteria. */
  let result: number = 0;
  // All Possible Sub Arrays of 's' array whose length is equal to m.
  let subArr = subset(s, m);
  for (let i = 0; i < subArr.length; i++) {
    // Adding values of each sub array
    let sum = subArr[i].reduce((x: number, y: number) => x + y);
    // Checking if the sum is equal to given 'd'
    if (sum == d) {
      // If it is, then we will increment the number of ways 'result' by 1
      result += 1;
    }
  }
  /* Returning all possible ways to divide the chocolate 
  according to the problem */
  return result;
}

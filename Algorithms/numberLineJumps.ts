/*
Problem Name: Number Line Jumps
Problem Details: https://www.hackerrank.com/challenges/kangaroo/problem
Difficulty: Easy
*/

// Main Function
// K = yv + x ( K = Kangaroo position, y = number of jumps, v = jump distance, x = initial position)
function kangaroo(x1: number, v1: number, x2: number, v2: number): string {
  return v2 < v1 ? ((x1 - x2) % (v2 - v1) == 0 ? "YES" : "NO") : "NO";
}

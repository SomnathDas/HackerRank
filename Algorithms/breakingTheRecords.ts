/*
Problem Name: Breaking The Records
Problem Details: https://www.hackerrank.com/challenges/breaking-best-and-worst-records
Difficulty: Easy
*/

// Main Function
const breakingRecords = (scores: number[]): number[] => {
  let [timesBrokeRecord, timesLeastScored] = [0, 0];
  let [prevHigh, prevLow] = [scores[0], scores[0]];
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > prevHigh) {
      prevHigh = scores[i];
      timesBrokeRecord++;
    }
    if (scores[i] < prevLow) {
      prevLow = scores[i];
      timesLeastScored++;
    }
  }
  return [timesBrokeRecord, timesLeastScored];
};

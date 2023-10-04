/*

Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.

*/

export const merge = (intervals: number[][]) => {
  let result: number[][] = [];

  intervals.sort((a, b) => a[0] - b[0]);

  let prevInterval = [intervals[0][0], intervals[0][1]];

  for (let i = 1; i < intervals.length; i++) {
    let currInterval = intervals[i];
    if (currInterval[0] <= prevInterval[1]) {
      prevInterval[1] = Math.max(prevInterval[1], currInterval[1]);
    } else {
      result.push(prevInterval);
      prevInterval = [currInterval[0], currInterval[1]];
    }
  }

  result.push(prevInterval);

  return result;
};

console.log(
  merge([
    [1, 4],
    [4, 5],
  ])
);

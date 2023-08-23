/*

Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.

Input: heights = [2,1,5,6,2,3]
Output: 10
Explanation: The above is a histogram where width of each bar is 1.
The largest rectangle is shown in the red area, which has an area = 10 units.

*/

export const largestRectangleArea = (heights: number[]) => {
  let left = [];
  let right = [];
  let maxRectangle = 0;

  let stack = [];

  for (let i = 0; i < heights.length; i++) {
    console.log(heights[i], i);
  }

  return maxRectangle;
};

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));

/*

Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.

Input: heights = [2,1,5,6,2,3]
Output: 10
Explanation: The above is a histogram where width of each bar is 1.
The largest rectangle is shown in the red area, which has an area = 10 units.

*/

export const largestRectangleArea = (heights: number[]) => {
  let left: number[] = [];
  let right: number[] = [];
  let stack: number[] = [];
  let maxArea = 0;

  for (let i = 0; i < heights.length; i++) {
    while (stack.length && heights[stack.at(-1)!] >= heights[i]) {
      stack.pop();
    }

    left[i] = !stack.length ? 0 : stack.at(-1)! + 1;
    stack.push(i);
  }

  stack.length = 0;

  for (let i = heights.length - 1; i >= 0; i--) {
    while (stack.length && heights[stack.at(-1)!] >= heights[i]) {
      stack.pop();
    }

    right[i] = !stack.length ? heights.length - 1 : stack.at(-1)! - 1;
    stack.push(i);
  }

  for (let i = 0; i < heights.length; i++) {
    maxArea = Math.max(maxArea, (right[i] - left[i] + 1) * heights[i]);
  }

  return maxArea;
};

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));

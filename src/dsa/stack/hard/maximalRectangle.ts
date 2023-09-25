/*

Given a rows x cols binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.

Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
Output: 6
Explanation: The maximal rectangle is shown in the above picture.

*/

export const maximalRectangle = (matrix: string[][]) => {
  let row = matrix.length;
  let col = matrix[0].length;
  let heights: number[] = new Array(col).fill(0);
  let maxArea = 0;

  const findMaxArea = (heights: number[]) => {
    let left: number[] = [];
    let right: number[] = [];
    let stack: number[] = [];
    let maxArea = 0;

    for (let i = 0; i < heights.length; i++) {
      while (stack.length && heights[stack.at(-1)!] >= heights[i]) {
        stack.pop();
      }

      left[i] = stack.length ? stack.at(-1)! + 1 : 0;
      stack.push(i);
    }

    stack.length = 0;

    for (let i = heights.length - 1; i >= 0; i--) {
      while (stack.length && heights[stack.at(-1)!] >= heights[i]) {
        stack.pop();
      }

      right[i] = stack.length ? stack.at(-1)! - 1 : heights.length - 1;
      stack.push(i);
    }

    for (let i = 0; i < heights.length; i++) {
      maxArea = Math.max(maxArea, (right[i] - left[i] + 1) * heights[i]);
    }

    return maxArea;
  };

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (matrix[i][j] === "0") heights[j] = 0;
      else heights[j] += +matrix[i][j];
    }

    maxArea = Math.max(maxArea, findMaxArea(heights));
  }

  return maxArea;
};

console.log(
  maximalRectangle([
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"],
  ])
);

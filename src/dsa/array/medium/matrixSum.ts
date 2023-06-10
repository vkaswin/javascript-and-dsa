/*

You are given a 0-indexed 2D integer array nums. Initially, your score is 0. 
Perform the following operations until the matrix becomes empty:
From each row in the matrix, select the largest number and remove it. In the case of a tie,
it does not matter which number is chosen.
Identify the highest number amongst all those removed in step 1. Add that number to your score.
Return the final score.

*/

export const matrixSum = (nums: number[][]) => {
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    nums[i].sort((a, b) => a - b);
  }

  let row = nums.length;
  let col = nums[0].length;

  for (let i = 0; i < col; i++) {
    let max = nums[0][i];
    for (let j = 1; j < row; j++) {
      if (nums[j][i] > max) max = nums[j][i];
    }
    sum += max;
  }

  return sum;
};

console.log(
  matrixSum([
    [7, 2, 1],
    [6, 4, 2],
    [6, 5, 3],
    [3, 2, 1],
  ])
);

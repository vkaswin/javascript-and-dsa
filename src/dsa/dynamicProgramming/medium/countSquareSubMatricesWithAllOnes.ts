/*

Given a m * n matrix of ones and zeros, return how many square submatrices have all ones.

Input: matrix =
[
  [0,1,1,1],
  [1,1,1,1],
  [0,1,1,1]
]
Output: 15
Explanation: 
There are 10 squares of side 1.
There are 4 squares of side 2.
There is  1 square of side 3.
Total number of squares = 10 + 4 + 1 = 15.

*/

export const countSquares = (matrix: number[][]) => {
  let row = matrix.length;
  let col = matrix[0].length;
  let dp = new Array(row + 1).fill(0).map(() => new Array(col + 1).fill(0));

  for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= col; j++) {
      if (!matrix[i - 1][j - 1]) continue;
      dp[i][j] = 1 + Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]);
    }
  }

  return dp.reduce(
    (acc, curr) => acc + curr.reduce((acc, curr) => acc + curr, 0),
    0
  );
};

console.log(
  countSquares([
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [0, 1, 1, 1],
  ])
);

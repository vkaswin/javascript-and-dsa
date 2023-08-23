/*

Given an m x n binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
Output: 4

*/

export const maximalSquare = (matrix: string[][]) => {
  let maxSquare = 0;

  let dp: number[][] = [];

  for (let i = 0; i < matrix.length; i++) {
    dp[i] = new Array(matrix[0].length).fill(0);
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (i === 0 || j === 0) {
        dp[i][j] = matrix[i][j] === "1" ? 1 : 0;
      } else {
        dp[i][j] =
          matrix[i][j] === "1"
            ? 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1])
            : 0;
      }

      maxSquare = Math.max(maxSquare, dp[i][j]);
    }
  }

  return maxSquare * maxSquare;
};

console.log(
  maximalSquare([
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"],
  ])
);

/*

Given an m x n binary matrix mat, return the number of submatrices that have all ones.

Input: mat = [[1,0,1],[1,1,0],[1,1,0]]
Output: 13
Explanation: 
There are 6 rectangles of side 1x1.
There are 2 rectangles of side 1x2.
There are 3 rectangles of side 2x1.
There is 1 rectangle of side 2x2. 
There is 1 rectangle of side 3x1.
Total number of rectangles = 6 + 2 + 3 + 1 + 1 = 13.

*/

export const numSubmat = (mat: number[][]) => {
  console.log(mat);
  let row = mat.length;
  let col = mat[0].length;
  let dp = new Array(row + 1).fill(0).map(() => new Array(col + 1).fill(0));

  for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= col; j++) {
      if (!mat[i - 1][j - 1]) continue;
      dp[i][j] = 1 + dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp.reduce(
    (acc, curr) => acc + curr.reduce((acc, curr) => acc + curr, 0),
    0
  );
};

console.log(
  numSubmat([
    [1, 0, 1],
    [1, 1, 0],
    [1, 1, 0],
  ])
);

/*

Given an m x n binary matrix mat, return the number of special positions in mat.

A position (i, j) is called special if mat[i][j] == 1 and all other elements in row i and column j are 0 (rows and columns are 0-indexed).

Input: mat = [[1,0,0],[0,1,0],[0,0,1]]
Output: 3
Explanation: (0, 0), (1, 1) and (2, 2) are special positions.

*/

export const numSpecial = (mat: number[][]) => {
  let m = mat.length;
  let n = mat[0].length;
  let rowSum = new Array(m).fill(0);
  let colSum = new Array(n).fill(0);
  let ones: number[][] = [];
  let count = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!mat[i][j]) continue;
      rowSum[i]++;
      colSum[j]++;
      ones.push([i, j]);
    }
  }

  for (let [i, j] of ones) {
    if (rowSum[i] === 1 && colSum[j] === 1) count++;
  }

  return count;
};

console.log(
  numSpecial([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ])
);

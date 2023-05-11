/*

Given a square matrix mat, return the sum of the matrix diagonals. Only include the sum of all 
the elements on the primary diagonal and all the elements on the secondary diagonal that are not 
part of the primary diagonal.

Input: mat = [[1,1,1,1],
              [1,1,1,1],
              [1,1,1,1],
              [1,1,1,1]]
Output: 8

*/

export const diagonalSum = (mat: number[][]) => {
  let sum = 0;
  let n = mat.length - 1;

  for (let i = 0; i <= n; i++) {
    sum += mat[i][i];
    sum += mat[i][n - i];
  }

  return n % 2 == 0 ? sum - mat[n / 2][n / 2] : sum;
};

console.log(
  diagonalSum([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

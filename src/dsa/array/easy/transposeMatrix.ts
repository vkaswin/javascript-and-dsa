/*

Given a 2D integer array matrix, return the transpose of matrix.

The transpose of a matrix is the matrix flipped over its main diagonal, switching the 
matrix's row and column indices.

Example 1:

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[1,4,7],[2,5,8],[3,6,9]]

*/

export const transpose = (matrix: number[][]) => {
  let result: number[][] = [];
  let row = matrix.length;
  let column = matrix[0].length;

  for (let i = 0; i < column; i++) {
    result[i] = [];
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      result[j][i] = matrix[i][j];
    }
  }

  return result;
};

console.log(
  transpose([
    [1, 2, 3],
    [4, 5, 6],
  ])
);

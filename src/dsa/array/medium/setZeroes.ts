/*

Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
You must do it in place.

Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]

*/

export const setZeroes = (matrix: number[][]) => {
  let indexes: number[][] = [];
  let row = matrix.length;
  let col = matrix[0].length;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (matrix[i][j] === 0) indexes.push([i, j]);
    }
  }

  for (let i = 0; i < indexes.length; i++) {
    let [rowIndex, colIndex] = indexes[i];

    for (let i = 0; i < col; i++) {
      matrix[rowIndex][i] = 0;
    }

    for (let i = 0; i < row; i++) {
      matrix[i][colIndex] = 0;
    }
  }

  return matrix;
};

console.log(
  setZeroes([
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
  ])
);

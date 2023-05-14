/*

You are given an n x n integer matrix grid.
Generate an integer matrix maxLocal of size (n - 2) x (n - 2) such that:
maxLocal[i][j] is equal to the largest value of the 3 x 3 matrix in grid centered around 
row i + 1 and column j + 1.
In other words, we want to find the largest value in every contiguous 3 x 3 matrix in grid.
Return the generated matrix.

Input: grid = [[1,1,1,1,1],[1,1,1,1,1],[1,1,2,1,1],[1,1,1,1,1],[1,1,1,1,1]]
Output: [[2,2,2],[2,2,2],[2,2,2]]
Explanation: Notice that the 2 is contained within every contiguous 3 x 3 matrix in grid.

*/

export const largestLocal = (grid: number[][]) => {
  let matrix: number[][] = [];
  let row = 0;
  let column = 0;
  let n = grid.length;
  let size = 3;

  while (row + size <= n) {
    let max = 0;

    for (let i = row; i < row + size; i++) {
      for (let j = column; j < column + size; j++) {
        let val = grid[i][j];
        if (val > max) max = val;
      }
    }

    if (!matrix[row]) matrix[row] = [];
    matrix[row][column] = max;

    if (column + size < n) {
      column = column + 1;
    } else {
      row = row + 1;
      column = 0;
    }
  }

  return matrix;
};

console.log(
  largestLocal([
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 2, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
  ])
);

console.log(
  largestLocal([
    [9, 9, 8, 1],
    [5, 6, 2, 6],
    [8, 2, 6, 4],
    [6, 2, 2, 2],
  ])
);

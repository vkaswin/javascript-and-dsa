/*

Given an m x n matrix, return true if the matrix is Toeplitz. Otherwise, return false.
A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same elements.

Input: matrix = [[1,2,3,4],[5,1,2,3],[9,5,1,2]]
Output: true
Explanation:
In the above grid, the diagonals are:
"[9]", "[5, 5]", "[1, 1, 1]", "[2, 2, 2]", "[3, 3]", "[4]".
In each diagonal all elements are the same, so the answer is True.

Input: matrix = [[1,2],[2,2]]
Output: false
Explanation:
The diagonal "[1, 2]" has different elements.

*/

export const isToeplitzMatrix = (matrix: number[][]) => {
  let row = matrix.length - 1;
  let column = matrix[0].length - 1;
  let currRow = row;
  let currCol = 0;

  while (currRow >= 0) {
    let num = matrix[currRow][currCol];

    for (let i = currRow, j = currCol; i >= 0 && j >= 0; i--, j--) {
      if (matrix[i][j] !== num) return false;
    }

    currCol + 1 <= column ? currCol++ : --currRow;
  }

  return true;
};

export const isToeplitzMatrix2 = (matrix: number[][]) => {
  for (let i = matrix.length - 1; i > 0; i--) {
    for (let j = matrix[0].length - 1; j > 0; j--) {
      if (matrix[i][j] != matrix[i - 1][j - 1]) return false;
    }
  }
  return true;
};

console.log(
  isToeplitzMatrix([
    [1, 2, 3, 4],
    [5, 1, 2, 3],
    [9, 5, 1, 2],
  ])
);

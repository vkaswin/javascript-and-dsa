/*

Given an n x n array of integers matrix, return the minimum sum of any falling path through matrix.

A falling path starts at any element in the first row and chooses the element in the next row that is either directly below or diagonally left/right. Specifically, the next element from position (row, col) will be (row + 1, col - 1), (row + 1, col), or (row + 1, col + 1).

Input: matrix = [[2,1,3],[6,5,4],[7,8,9]]
Output: 13
Explanation: There are two falling paths with a minimum sum as shown.

*/

export const minFallingPathSumTopDown = (matrix: number[][]) => {
  let row = matrix.length;
  let col = matrix[0].length;
  let minSum = Infinity;
  let directions = [
    [1, 0],
    [1, -1],
    [1, 1],
  ];
  let cache: Record<string, number> = {};

  let dfs = (i: number, j: number): number => {
    let key = i + "," + j;

    if (key in cache) return cache[key];

    let sum = matrix[i][j];

    let min = Infinity;

    for (let [x, y] of directions) {
      x += i;
      y += j;

      if (x < 0 || y < 0 || x >= row || y >= col) continue;

      min = Math.min(min, dfs(x, y));
    }

    sum += isFinite(min) ? min : 0;

    cache[key] = sum;

    return cache[key];
  };

  for (let i = 0; i < col; i++) {
    minSum = Math.min(minSum, dfs(0, i));
  }

  return minSum;
};

export const minFallingPathSum = (matrix: number[][]) => {
  let row = matrix.length;
  let col = matrix[0].length;

  for (let i = 1; i < row; i++) {
    for (let j = 0; j < col; j++) {
      matrix[i][j] += Math.min(
        matrix[i - 1][j] ?? Infinity,
        matrix[i - 1][j - 1] ?? Infinity,
        matrix[i - 1][j + 1] ?? Infinity
      );
    }
  }

  return Math.min(...matrix[matrix.length - 1]);
};

console.log(
  minFallingPathSum([
    [2, 1, 3],
    [6, 5, 4],
    [7, 8, 9],
  ])
);

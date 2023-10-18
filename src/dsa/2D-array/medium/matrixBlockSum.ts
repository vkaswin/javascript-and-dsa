/*

Given a m x n matrix mat and an integer k, return a matrix answer where each answer[i][j] is the sum of all elements mat[r][c] for:

i - k <= r <= i + k,
j - k <= c <= j + k, and
(r, c) is a valid position in the matrix.

Input: mat = [[1,2,3],[4,5,6],[7,8,9]], k = 1
Output: [[12,21,16],[27,45,33],[24,39,28]]

*/

export const matrixBlockSum = (mat: number[][], k: number) => {
  let prefix: number[][] = [];
  let row = mat.length;
  let col = mat[0].length;
  let result: number[][] = [];

  for (let i = 0; i < row; i++) {
    let sum = 0;
    let arr = [];
    for (let j = 0; j < col; j++) {
      sum += mat[i][j];
      arr[j] = sum + (prefix[i - 1]?.[j] || 0);
    }
    prefix[i] = arr;
  }

  let getValue = (row1: number, col1: number, row2: number, col2: number) => {
    return (
      prefix[row2][col2] -
      (prefix[row1 - 1]?.[col2] || 0) -
      (prefix[row2]?.[col1 - 1] || 0) +
      (prefix[row1 - 1]?.[col1 - 1] || 0)
    );
  };

  for (let i = 0; i < row; i++) {
    let arr: number[] = [];

    for (let j = 0; j < col; j++) {
      arr[j] = getValue(
        Math.max(0, i - k),
        Math.max(0, j - k),
        Math.min(row - 1, i + k),
        Math.min(col - 1, j + k)
      );
    }

    result[i] = arr;
  }

  return result;
};

console.log(
  matrixBlockSum(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    1
  )
);

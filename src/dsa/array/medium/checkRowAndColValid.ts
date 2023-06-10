/*

An n x n matrix is valid if every row and every column contains all the integers from 1 to n (inclusive).
Given an n x n integer matrix matrix, return true if the matrix is valid. Otherwise, return false.

Input: matrix = [[1,2,3],[3,1,2],[2,3,1]]
Output: true
Explanation: In this case, n = 3, and every row and column contains the numbers 1, 2, and 3.
Hence, we return true.

*/

export const checkValid = (matrix: number[][]) => {
  let n = matrix.length;

  for (let i = 0; i < n; i++) {
    if (new Set(matrix[i]).size !== n) return false;
    let col = new Set<number>();
    for (let j = 0; j < n; j++) {
      col.add(matrix[j][i]);
    }
    if (col.size !== n) return false;
  }

  return true;
};

console.log(
  checkValid([
    [1, 2, 3],
    [3, 1, 2],
    [2, 3, 1],
  ])
);

/*

A matrix diagonal is a diagonal line of cells starting from some cell in either the topmost row or 
leftmost column and going in the bottom-right direction until reaching the matrix's end. 
For example, the matrix diagonal starting from mat[2][0], where mat is a 6 x 3 matrix, includes 
cells mat[2][0], mat[3][1], and mat[4][2]. Given an m x n matrix mat of integers, sort each
matrix diagonal in ascending order and return the resulting matrix

Input: mat = [[3,3,1,1],[2,2,1,2],[1,1,1,2]]
Output: [[1,1,1,1],[1,2,2,2],[1,2,3,3]]

*/

export const diagonalSort = (mat: number[][]) => {
  let row = mat.length;
  let col = mat[0].length;
  let map: Record<number, number[]> = {};

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (map[i - j] === undefined) map[i - j] = [mat[i][j]];
      else map[i - j].push(mat[i][j]);
    }
  }

  for (let key in map) {
    map[key].sort((a, b) => b - a);
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      mat[i][j] = map[i - j].pop() as number;
    }
  }

  return mat;
};

console.log(
  diagonalSort([
    [3, 3, 1, 1],
    [2, 2, 1, 2],
    [1, 1, 1, 2],
  ])
);

[
  [1, 5, 9],
  [10, 11, 13],
  [12, 13, 15],
];

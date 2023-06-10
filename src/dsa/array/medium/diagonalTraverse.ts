/*

Given an m x n matrix mat, return an array of all the elements of the array in a diagonal order.

Input: mat = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,4,7,5,3,6,8,9]

*/

export const findDiagonalOrderAlternative = (mat: number[][]) => {
  let map: Record<number, number[]> = [];
  let row = mat.length;
  let col = mat[0].length;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (map[i + j] === undefined) map[i + j] = [mat[i][j]];
      else map[i + j].push(mat[i][j]);
    }
  }

  return Object.entries(map).reduce((acc, [key, value]) => {
    if (+key % 2 === 0) value.reverse();
    acc.push(...value);
    return acc;
  }, [] as number[]);
};

export const findDiagonalOrder = (mat: number[][]) => {
  let nums: number[] = [];
  let row = mat.length - 1;
  let col = mat[0].length - 1;

  let currCol = 0;
  let currRow = 0;
  let upwards = true;

  while (currRow <= row && currCol <= col) {
    nums.push(mat[currRow][currCol]);

    if (upwards) {
      if (currCol === col) {
        upwards = false;
        currRow++;
      } else if (currRow === 0) {
        upwards = false;
        currCol++;
      } else {
        currRow--;
        currCol++;
      }
    } else {
      if (currRow === row) {
        upwards = true;
        currCol++;
      } else if (currCol === 0) {
        upwards = true;
        currRow++;
      } else {
        currRow++;
        currCol--;
      }
    }
  }

  return nums;
};

console.log(
  findDiagonalOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

[
  [1, 2],
  [3, 4],
];

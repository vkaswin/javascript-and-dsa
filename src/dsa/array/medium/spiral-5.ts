/*

Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

Input: n = 3
Output: [[1,2,3],[8,9,4],[7,6,5]]

*/

export let generateMartix = (n: number) => {
  let matrix: number[][] = [];

  for (let i = 0; i < n; i++) {
    matrix[i] = [];
  }

  let top = 0;
  let left = 0;
  let right = n - 1;
  let bottom = n - 1;
  let index = 1;
  let size = n * n;

  while (index <= size) {
    for (let i = left; i <= right && index <= size; i++) {
      matrix[top][i] = index++;
    }
    top++;

    for (let i = top; i <= bottom && index <= size; i++) {
      matrix[i][right] = index++;
    }
    right--;

    for (let i = right; i >= left && index <= size; i--) {
      matrix[bottom][i] = index++;
    }
    bottom--;

    for (let i = bottom; i >= top && index <= size; i--) {
      matrix[i][left] = index++;
    }
    left++;
  }

  return matrix;
};

console.log(generateMartix(3));

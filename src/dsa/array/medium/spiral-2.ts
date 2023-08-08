import { spiral } from "@/dsa/2D-array/medium/spiral-1";

/*
Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

Input: n = 3

Output: [[1,2,3],[8,9,4],[7,6,5]]
*/

export const createMatrix = (n: number) => {
  let matrix: number[][] = [];
  let num = 1;
  for (let i = 0; i < n; i++) {
    matrix[i] = [];
    for (let j = 0; j < n; j++) {
      matrix[i][j] = num;
      num++;
    }
  }

  return matrix;
};

let matrix = createMatrix(4);

console.log(spiral(matrix));

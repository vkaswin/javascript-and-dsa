/*

You are given two integers m and n, which represent the dimensions of a matrix.

You are also given the head of a linked list of integers.

Generate an m x n matrix that contains the integers in the linked list presented in spiral order (clockwise), starting from the top-left of the matrix. If there are remaining empty spaces, fill them with -1.

Return the generated matrix.

Input: m = 3, n = 5, head = [3,0,2,6,8,1,7,9,4,2,5,5,0]

Output: [[3,0,2,6,8],[5,0,-1,-1,1],[5,2,4,9,7]]

Note that the remaining spaces in the matrix are filled with -1.

*/

export const spiralToMatrix = (m: number, n: number, head: number[]) => {
  let matrix: number[][] = [];
  let size = m * n;

  for (let i = head.length - 1; i < size; i++) {
    head[i] = -1;
  }

  return matrix;
};

spiralToMatrix(3, 5, [3, 0, 2, 6, 8, 1, 7, 9, 4, 2, 5, 5, 0]);

/*

You are given two integers m and n, which represent the dimensions of a matrix. You are also given
the head of a linked list of integers. Generate an m x n matrix that contains the 
integers in the linked list presented in spiral order (clockwise), starting from the top-left of the 
matrix. If there are remaining empty spaces, fill them with -1. Return the generated matrix

Input: m = 3, n = 5, head = [3,0,2,6,8,1,7,9,4,2,5,5,0]
Output: [[3,0,2,6,8],[5,0,-1,-1,1],[5,2,4,9,7]]
Explanation: The diagram above shows how the values are printed in the matrix.
Note that the remaining spaces in the matrix are filled with -1.

*/

import { IListNode, buildLinkedList } from "../list";

export const spiralMatrix = (m: number, n: number, head: IListNode | null) => {
  if (!head) return null;

  let matrix: number[][] = new Array(m)
    .fill(-1)
    .map(() => new Array(n).fill(-1));

  let top = 0;
  let bottom = m - 1;
  let right = n - 1;
  let left = 0;
  let curr: IListNode | null = head;

  while (curr) {
    // left to right
    for (let i = left; i <= right && curr; i++) {
      matrix[top][i] = curr.val;
      curr = curr.next;
    }
    top++;

    // top to bottom
    for (let i = top; i <= bottom && curr; i++) {
      matrix[i][right] = curr.val;
      curr = curr.next;
    }
    right--;

    // right to left
    for (let i = right; i >= left && curr; i--) {
      matrix[bottom][i] = curr.val;
      curr = curr.next;
    }
    bottom--;

    // bottom to top
    for (let i = bottom; i >= top && curr; i--) {
      matrix[i][left] = curr.val;
      curr = curr.next;
    }
    left++;
  }

  return matrix;
};

let head = buildLinkedList([3, 0, 2, 6, 8, 1, 7, 9, 4, 2, 5, 5, 0]);
console.log(spiralMatrix(3, 5, head));

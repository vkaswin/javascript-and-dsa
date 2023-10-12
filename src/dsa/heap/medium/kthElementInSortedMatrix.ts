/*

Given an n x n matrix where each of the rows and columns is sorted in ascending order, return the kth smallest element in the matrix.

Note that it is the kth smallest element in the sorted order, not the kth distinct element.

You must find a solution with a memory complexity better than O(n2).

Input: matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8
Output: 13
Explanation: The elements in the matrix are [1,5,9,10,11,12,13,13,15], and the 8th smallest number is 13

*/

import { MaxHeap } from "@/dsa/heap";

export const kthSmallest = (matrix: number[][], k: number) => {
  let heap = new MaxHeap<number>();
  let row = matrix.length;
  let col = matrix[0].length;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      heap.insert(matrix[i][j]);
      if (heap.size > k) heap.remove();
    }
  }
  return heap.remove();
};

console.log(
  kthSmallest(
    [
      [1, 5, 9],
      [10, 11, 13],
      [12, 13, 15],
    ],
    8
  )
);

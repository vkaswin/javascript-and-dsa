/*

You are given an m x n integer matrix matrix with the following two properties:
Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.
You must write a solution in O(log(m * n)) time complexity.

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true

*/

const findRowIndex = (matrix: number[][], target: number) => {
  let top = 0;
  let bottom = matrix.length - 1;

  while (top <= bottom) {
    let middle = Math.floor((top + bottom) / 2);
    let arr = matrix[middle];
    if (target >= arr[0] && target <= arr[arr.length - 1]) return middle;
    if (target > arr[0]) top = middle + 1;
    else bottom = middle - 1;
  }

  return -1;
};

export const searchMatrix = (matrix: number[][], target: number) => {
  let index = findRowIndex(matrix, target);

  if (index === -1) return false;

  let arr = matrix[index];
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (arr[middle] === target) return true;
    if (target > arr[middle]) left = middle + 1;
    else right = middle - 1;
  }

  return false;
};

console.log(searchMatrix([[1, 3]], 3));

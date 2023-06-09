/*

You are given an m x n integer matrix matrix with the following two properties:
Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.
You must write a solution in O(log(m * n)) time complexity.

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true

*/

export const searchMatrix = (matrix: number[][], target: number) => {
  let index = matrix.findIndex(
    (nums) => target >= nums[0] && target <= nums[nums.length - 1]
  );

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

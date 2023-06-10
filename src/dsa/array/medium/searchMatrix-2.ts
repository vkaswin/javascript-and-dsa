/*

Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. 
This matrix has the following properties:
Integers in each row are sorted in ascending from left to right.
Integers in each column are sorted in ascending from top to bottom.

Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
Output: true

*/

export const searchMatrix = (matrix: number[][], target: number) => {
  let search = (arr: number[]) => {
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

  let arr = matrix.filter(([num]) => num <= target);

  for (let i = 0; i < arr.length; i++) {
    if (search(arr[i])) return true;
  }

  return false;
};

console.log(
  searchMatrix(
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ],
    5
  )
);

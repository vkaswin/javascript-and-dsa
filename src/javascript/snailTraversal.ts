/*

Write code that enhances all arrays such that you can call the snail(rowsCount, colsCount) 
method that transforms the 1D array into a 2D array organised in the pattern known as 
snail traversal order. Invalid input values should output an empty array. 
If rowsCount * colsCount !== nums.length, the input is considered invalid.
Snail traversal order starts at the top left cell with the first value of the current array. 
It then moves through the entire first column from top to bottom, followed by moving to the 
next column on the right and traversing it from bottom to top. This pattern continues, 
alternating the direction of traversal with each column, until the entire current array is covered. 
For example, when given the input array 
[19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15] 
with rowsCount = 5 and colsCount = 4, the desired output matrix is shown below. 
Note that iterating the matrix following the arrows corresponds to the order of numbers 
in the original array.

Input: 
nums = [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15]
rowsCount = 5
colsCount = 4
Output: 
[
 [19,17,16,15],
 [10,1,14,4],
 [3,2,12,20],
 [7,5,18,11],
 [9,8,6,13]
]

*/

interface Array<T> {
  snail(rowsCount: number, colsCount: number): number[][];
  snailAlternative(rowsCount: number, colsCount: number): number[][];
}

Array.prototype.snail = function (rowsCount, colsCount) {
  let result: number[][] = [];

  if (rowsCount * colsCount !== this.length) return result;

  for (let i = 0; i < rowsCount; i++) {
    result[i] = [];
  }

  let row = 0;
  let column = 0;
  let increment = 1;

  for (let i = 0; i < this.length; i++) {
    result[row][column] = this[i];

    row += increment;

    if (row === rowsCount) {
      increment = -1;
      row = rowsCount - 1;
      column++;
    } else if (row < 0) {
      increment = 1;
      row = 0;
      column++;
    }
  }

  return result;
};

Array.prototype.snailAlternative = function (rowsCount, colsCount) {
  if (rowsCount * colsCount !== this.length) return [];

  let result: number[][] = new Array(rowsCount).fill(null).map(() => []);

  let index = 0;
  let column = 0;

  while (index < this.length) {
    // top to bottom
    for (let i = 0; i < rowsCount && index < this.length; i++) {
      result[i][column] = this[index];
      index++;
    }
    column++;

    // bottom to top
    for (let i = rowsCount - 1; i >= 0 && index < this.length; i--) {
      result[i][column] = this[index];
      index++;
    }
    column++;
  }

  return result;
};

let arr = [
  19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15,
];
console.log(arr.snail(5, 4));

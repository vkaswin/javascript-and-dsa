/* 
Given an m x n matrix, return all elements of the matrix in spiral order.

Input:  [  
            [ 1,    2,   3,   4 ],
            [ 5,    6,   7,   8 ],
            [ 9,   10,  11,  12 ],
            [ 13,  14,  15,  16 ]
        ]
    
Output: 1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10 
*/

let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

export const spiral = (matrix: number[][]) => {
  let result: number[] = [];
  let row = matrix.length;
  let column = matrix[0].length;
  let top = 0;
  let left = 0;
  let bottom = row - 1;
  let right = column - 1;
  let size = row * column;

  let addElement = (i: number, j: number) => {
    result.push(matrix[i][j]);
  };

  while (result.length < size) {
    // left to right
    for (let i = left; i <= right && result.length < size; i++) {
      addElement(top, i);
    }
    top++;

    // top to bottom
    for (let i = top; i <= bottom && result.length < size; i++) {
      addElement(i, right);
    }
    right--;

    // right to left
    for (let i = right; i >= left && result.length < size; i--) {
      addElement(bottom, i);
    }
    bottom--;

    // bottom to top
    for (let i = bottom; i >= top && result.length < size; i--) {
      addElement(i, left);
    }
    left++;
  }

  return result.join(" ");
};

console.log(spiral(matrix));

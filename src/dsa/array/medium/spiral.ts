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

let matrix1 = [
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

  return result;
};

// console.log(spiral(matrix1).join(" "));

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

let matrix2 = createMatrix(4);
// console.log(spiral(matrix2));

/*
You start at the cell (rStart, cStart) of an rows x cols grid facing east. The northwest corner is at the first row and column in the grid, and the southeast corner is at the last row and column.

You will walk in a clockwise spiral shape to visit every position in this grid. Whenever you move outside the grid's boundary, we continue our walk outside the grid (but may return to the grid boundary later.). Eventually, we reach all rows * cols spaces of the grid.

Return an array of coordinates representing the positions of the grid in the order you visited them.

Input: rows = 1, cols = 4, rStart = 0, cStart = 0

Output: [[0,0],[0,1],[0,2],[0,3]]

*/

let matrix3 = [
  [1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18],
  [19, 20, 21, 22, 23, 24],
  [25, 26, 27, 28, 29, 30],
];

export const spiralByStartAndEnd = (
  matrix: number[][],
  rowStart: number,
  colStart: number
) => {
  let coordinates: [number, number][] = [];
  let row = matrix.length;
  let column = matrix[0].length;
  let top = rowStart;
  let left = colStart;
  let right = column - 1;
  let bottom = row - 1;
  let size = row * column;

  const addElement = (i: number, j: number) => {
    coordinates.push([i, j]);
  };

  while (coordinates.length < size) {
    // left to right
    for (let i = 0; i < 0; i++) {}

    // top to bottom
    for (let i = 0; i < 0; i++) {}

    // right to left
    for (let i = 0; i < 0; i++) {}

    // bottom to top
    for (let i = 0; i < 0; i++) {}

    break;
  }

  return coordinates;
};

console.log(spiralByStartAndEnd(matrix3, 1, 4));

/*
You start at the cell (rStart, cStart) of an rows x cols grid facing east. The northwest corner is at the first row and column in the grid, and the southeast corner is at the last row and column.

You will walk in a clockwise spiral shape to visit every position in this grid. Whenever you move outside the grid's boundary, we continue our walk outside the grid (but may return to the grid boundary later.). Eventually, we reach all rows * cols spaces of the grid.

Return an array of coordinates representing the positions of the grid in the order you visited them.

Input: rows = 1, cols = 4, rStart = 0, cStart = 0

Output: [[0,0],[0,1],[0,2],[0,3]]

*/

let matrix = [
  [1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18],
  [19, 20, 21, 22, 23, 24],
  [25, 26, 27, 28, 29, 30],
];

export const spiral = (
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

console.log(spiral(matrix, 1, 4));

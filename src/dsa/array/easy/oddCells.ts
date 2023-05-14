/*

There is an m x n matrix that is initialized to all 0's. There is also a 2D array indices where 
each indices[i] = [ri, ci] represents a 0-indexed location to perform some increment operations on the matrix.
For each location indices[i], do both of the following:
Increment all the cells on row ri.
Increment all the cells on column ci.
Given m, n, and indices, return the number of odd-valued cells in the matrix after applying 
the increment to all locations in indices.

Input: m = 2, n = 3, indices = [[0,1],[1,1]]
Output: 6
Explanation: Initial matrix = [[0,0,0],[0,0,0]].
After applying first increment it becomes [[1,2,1],[0,1,0]].
The final matrix is [[1,3,1],[1,3,1]], which contains 6 odd numbers.

*/

export const oddCells = (m: number, n: number, indices: number[][]) => {
  let matrix: number[][] = [];
  let count = 0;

  for (let i = 0; i < m; i++) {
    matrix[i] = [];
    for (let j = 0; j < n; j++) {
      matrix[i][j] = 0;
    }
  }

  for (let i = 0; i < indices.length; i++) {
    let [x, y] = indices[i];

    for (let i = 0; i < n; i++) {
      matrix[x][i] += 1;
    }

    for (let i = 0; i < m; i++) {
      matrix[i][y] += 1;
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] % 2 !== 0) count++;
    }
  }

  return count;
};

export const oddCells1 = (m: number, n: number, indices: number[][]) => {
  let rows: any = {};
  let cols: any = {};

  for (let i = 0; i < indices.length; i++) {
    if (rows[indices[i][0]]) {
      delete rows[indices[i][0]];
    } else {
      rows[indices[i][0]] = true;
    }
    if (cols[indices[i][1]]) {
      delete cols[indices[i][1]];
    } else {
      cols[indices[i][1]] = true;
    }
  }

  let ACLength = Object.keys(cols).length;
  let ARLength = Object.keys(rows).length;

  return (
    ARLength * (!ACLength ? n : n - ACLength) +
    ACLength * (!ARLength ? m : m - ARLength)
  );
};

console.log(
  oddCells1(2, 3, [
    [0, 1],
    [1, 1],
  ])
);

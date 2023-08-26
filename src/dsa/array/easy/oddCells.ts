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
  let rows = new Array(m).fill(0);
  let cols = new Array(n).fill(0);
  let count = 0;

  for (let [i, j] of indices) {
    rows[i]++;
    cols[j]++;
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if ((rows[i] + cols[j]) % 2) count++;
    }
  }

  return count;
};

console.log(
  oddCells(2, 3, [
    [0, 1],
    [1, 1],
  ])
);

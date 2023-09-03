/*

You are given an m x n binary matrix grid, where 0 represents a sea cell and 1 represents a land cell.

A move consists of walking from one land cell to another adjacent (4-directionally) land cell or walking off the boundary of the grid.

Return the number of land cells in grid for which we cannot walk off the boundary of the grid in any number of moves.

Input: grid = [[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]]
Output: 3
Explanation: There are three 1s that are enclosed by 0s, and one 1 that is not enclosed because its on the boundary.

*/

export const numEnclaves = (grid: number[][]) => {
  let row = grid.length;
  let col = grid[0].length;
  let count = 0;
  let visited = new Set<string>();
  let directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  let dfs = (i: number, j: number) => {
    let key = i + "," + j;
    if (
      i < 0 ||
      j < 0 ||
      i >= row ||
      j >= col ||
      visited.has(key) ||
      grid[i][j] !== 1
    )
      return;

    grid[i][j] = 0;

    for (let [x, y] of directions) {
      dfs(x + i, y + j);
    }
  };

  for (let i = 0; i < row; i++) {
    dfs(i, 0);
    dfs(i, col - 1);
  }

  for (let i = 0; i < col; i++) {
    dfs(0, i);
    dfs(row - 1, i);
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === 1) count++;
    }
  }

  return count;
};

console.log(
  numEnclaves([
    [0, 0, 0, 0],
    [1, 0, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
  ])
);

/*

Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3

*/

export const maxAreaOfIsland = (grid: number[][]) => {
  let row = grid.length;
  let col = grid[0].length;
  let visited = new Set();
  let maxArea = 0;

  let dfs = (i: number, j: number): number => {
    if (
      i < 0 ||
      i >= row ||
      j < 0 ||
      j >= col ||
      grid[i][j] === 0 ||
      visited.has(`${i},${j}`)
    )
      return 0;

    visited.add(`${i},${j}`);

    return 1 + dfs(i - 1, j) + dfs(i + 1, j) + dfs(i, j - 1) + dfs(i, j + 1);
  };

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (visited.has(`${i},${j}`) || grid[i][j] === 0) continue;
      maxArea = Math.max(maxArea, dfs(i, j));
    }
  }

  return maxArea;
};

console.log(
  maxAreaOfIsland([
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  ])
);

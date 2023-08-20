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

export const numIslands = (grid: string[][]) => {
  let row = grid.length;
  let col = grid[0].length;
  let count = 0;
  let directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  let dfs = (i: number, j: number) => {
    if (i < 0 || j < 0 || i >= row || j >= col || grid[i][j] !== "1") return;
    grid[i][j] = "0";
    for (let [x, y] of directions) {
      dfs(i + x, j + y);
    }
  };

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === "0") continue;
      dfs(i, j);
      count++;
    }
  }

  return count;
};

console.log(
  numIslands([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ])
);

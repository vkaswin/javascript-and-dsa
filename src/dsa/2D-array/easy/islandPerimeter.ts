/*

You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water.

Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

Input: grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
Output: 16
Explanation: The perimeter is the 16 yellow stripes in the image above.

*/

export const islandPerimeter = (grid: number[][]) => {
  let perimeter = 0;
  let row = grid.length;
  let col = grid[0].length;
  let directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  let visited = new Set<string>();

  let dfs = (i: number, j: number) => {
    let key = i + "," + j;

    if (visited.has(key)) return false;

    if (i < 0 || j < 0 || i >= row || j >= col || grid[i][j] === 0) return true;

    visited.add(key);

    for (let [x, y] of directions) {
      if (dfs(x + i, y + j)) perimeter++;
    }

    return false;
  };

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === 0) continue;
      dfs(i, j);
      return perimeter;
    }
  }
};

console.log(
  islandPerimeter([
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0],
  ])
);

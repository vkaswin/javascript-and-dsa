/*

In a gold mine grid of size m x n, each cell in this mine has an integer representing the amount of gold in that cell, 0 if it is empty.

Return the maximum amount of gold you can collect under the conditions:

Every time you are located in a cell you will collect all the gold in that cell.
From your position, you can walk one step to the left, right, up, or down.
You can't visit the same cell more than once.
Never visit a cell with 0 gold.
You can start and stop collecting gold from any position in the grid that has some gold.

*/

export const getMaximumGold = (grid: number[][]) => {
  let row = grid.length;
  let col = grid[0].length;
  let maxGold = 0;
  let directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  let dfs = (i: number, j: number): number => {
    if (i < 0 || j < 0 || i >= row || j >= col || !grid[i][j]) return 0;

    let gold = grid[i][j];

    grid[i][j] = 0;

    let maxGold = 0;

    for (let [x, y] of directions) {
      maxGold = Math.max(maxGold, dfs(x + i, y + j));
    }

    grid[i][j] = gold;

    return gold + maxGold;
  };

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (!grid[i][j]) continue;

      maxGold = Math.max(maxGold, dfs(i, j));
    }
  }

  return maxGold;
};

console.log(
  getMaximumGold([
    [0, 6, 0],
    [5, 8, 7],
    [0, 9, 0],
  ])
);

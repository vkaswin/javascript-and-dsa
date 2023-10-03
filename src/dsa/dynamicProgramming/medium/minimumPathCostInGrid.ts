/*

You are given a 0-indexed m x n integer matrix grid consisting of distinct integers from 0 to m * n - 1. You can move in this matrix from a cell to any other cell in the next row. That is, if you are in cell (x, y) such that x < m - 1, you can move to any of the cells (x + 1, 0), (x + 1, 1), ..., (x + 1, n - 1). Note that it is not possible to move from cells in the last row.

Each possible move has a cost given by a 0-indexed 2D array moveCost of size (m * n) x n, where moveCost[i][j] is the cost of moving from a cell with value i to a cell in column j of the next row. The cost of moving from cells in the last row of grid can be ignored.

The cost of a path in grid is the sum of all values of cells visited plus the sum of costs of all the moves made. Return the minimum cost of a path that starts from any cell in the first row and ends at any cell in the last row.

Input: grid = [[5,3],[4,0],[2,1]], moveCost = [[9,8],[1,5],[10,12],[18,6],[2,4],[14,3]]
Output: 17
Explanation: The path with the minimum possible cost is the path 5 -> 0 -> 1.
- The sum of the values of cells visited is 5 + 0 + 1 = 6.
- The cost of moving from 5 to 0 is 3.
- The cost of moving from 0 to 1 is 8.
So the total cost of the path is 6 + 3 + 8 = 17.

*/

export const minPathCost = (grid: number[][], moveCost: number[][]) => {
  let row = grid.length;
  let col = grid[0].length;
  let dp = new Array(row).fill(0).map(() => new Array(col));
  let minCost = Infinity;

  let dfs = (i: number, j: number) => {
    if (i < 0 || j < 0 || i >= row || j >= col) return Infinity;

    if (i === row - 1) return grid[i][j];

    if (dp[i][j] !== undefined) return dp[i][j];

    let minCost = Infinity;
    let cell = grid[i][j];

    for (let x = 0; x < col; x++) {
      let cost = moveCost[cell][x] + cell + dfs(i + 1, x);

      minCost = Math.min(minCost, cost);
    }

    return (dp[i][j] = minCost);
  };

  for (let i = 0; i < col; i++) {
    minCost = Math.min(minCost, dfs(0, i));
  }

  return minCost;
};

console.log(
  minPathCost(
    [
      [5, 3],
      [4, 0],
      [2, 1],
    ],
    [
      [9, 8],
      [1, 5],
      [10, 12],
      [18, 6],
      [2, 4],
      [14, 3],
    ]
  )
);

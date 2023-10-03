/*

You are given a 0-indexed m x n matrix grid consisting of positive integers.

You can start at any cell in the first column of the matrix, and traverse the grid in the following way:

From a cell (row, col), you can move to any of the cells: (row - 1, col + 1), (row, col + 1) and (row + 1, col + 1) such that the value of the cell you move to, should be strictly bigger than the value of the current cell.
Return the maximum number of moves that you can perform.

Input: grid = [[2,4,3,5],[5,4,9,3],[3,4,2,11],[10,9,13,15]]
Output: 3
Explanation: We can start at the cell (0, 0) and make the following moves:
- (0, 0) -> (0, 1).
- (0, 1) -> (1, 2).
- (1, 2) -> (2, 3).
It can be shown that it is the maximum number of moves that can be made.

*/

export const maxMoves = (grid: number[][]) => {
  let directions = [
    [-1, 1],
    [0, 1],
    [1, 1],
  ];
  let row = grid.length;
  let col = grid[0].length;
  let dp = new Array(row).fill(0).map(() => new Array(col));
  let maxMoves = 0;

  let dfs = (i: number, j: number, prev: number) => {
    if (i < 0 || j < 0 || i >= row || j >= col || grid[i][j] <= prev) return 0;

    if (dp[i][j] !== undefined) return dp[i][j];

    let maxMoves = 0;
    let cell = grid[i][j];

    for (let [x, y] of directions) {
      let moves = 1 + dfs(x + i, y + j, cell);
      maxMoves = Math.max(maxMoves, moves);
    }

    return (dp[i][j] = maxMoves);
  };

  for (let i = 0; i < row; i++) {
    maxMoves = Math.max(maxMoves, dfs(i, 0, -Infinity) - 1);
  }

  return maxMoves;
};

console.log(
  maxMoves([
    [2, 4, 3, 5],
    [5, 4, 9, 3],
    [3, 4, 2, 11],
    [10, 9, 13, 15],
  ])
);

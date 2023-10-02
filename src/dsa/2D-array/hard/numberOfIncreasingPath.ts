/*

You are given an m x n integer matrix grid, where you can move from a cell to any adjacent cell in all 4 directions.

Return the number of strictly increasing paths in the grid such that you can start from any cell and end at any cell. Since the answer may be very large, return it modulo 109 + 7.

Two paths are considered different if they do not have exactly the same sequence of visited cells.

Input: grid = [[1,1],[3,4]]
Output: 8
Explanation: The strictly increasing paths are:
- Paths with length 1: [1], [1], [3], [4].
- Paths with length 2: [1 -> 3], [1 -> 4], [3 -> 4].
- Paths with length 3: [1 -> 3 -> 4].
The total number of paths is 4 + 3 + 1 = 8.

*/

export const countPaths = (grid: number[][]) => {
  let row = grid.length;
  let col = grid[0].length;
  let dp = new Array(row).fill(0).map(() => new Array(col));
  let directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  let count = 0;
  let mod = Math.pow(10, 9) + 7;

  let dfs = (i: number, j: number, prev: number): number => {
    if (i < 0 || j < 0 || i >= row || j >= col || grid[i][j] <= prev) return 0;

    if (dp[i][j] !== undefined) return dp[i][j];

    let count = directions.reduce(
      (acc, [x, y]) => acc + dfs(x + i, y + j, grid[i][j]),
      1
    );

    return (dp[i][j] = count % mod);
  };

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      count += dfs(i, j, -Infinity) % mod;
    }
  }

  return count % mod;
};

console.log(
  countPaths([
    [1, 1],
    [3, 4],
  ])
);

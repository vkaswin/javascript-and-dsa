function maxProductPath(grid: number[][]): number {
  let row = grid.length;
  let col = grid[0].length;
  let dp = new Array(row).fill(0).map(() => new Array(col));

  let dfs = (i: number, j: number): number => {
    if (i < 0 || j < 0 || i >= row || j >= col) return -Infinity;

    if (i === row - 1 && j === col - 1) return grid[i][j];

    if (dp[i][j] !== undefined) return dp[i][j];

    let cell = grid[i][j];

    let right = dfs(i, j + 1);
    let bottom = dfs(i + 1, j);

    return (dp[i][j] = Math.max(
      isFinite(right) ? right * cell : -Infinity,
      isFinite(bottom) ? bottom * cell : -Infinity
    ));
  };

  let res = dfs(0, 0);

  return res >= 0 ? res : -1;
}

console.log(
  maxProductPath([
    [-4, 4],
    [-1, -4],
  ])
);
// [-1, -4, 2],
// [4, 3, -1],
// [2, -4, 4],
// [1, -1, -4],

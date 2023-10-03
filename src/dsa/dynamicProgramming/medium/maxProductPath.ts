/*

You are given a m x n matrix grid. Initially, you are located at the top-left corner (0, 0), and in each step, you can only move right or down in the matrix.

Among all possible paths starting from the top-left corner (0, 0) and ending in the bottom-right corner (m - 1, n - 1), find the path with the maximum non-negative product. The product of a path is the product of all integers in the grid cells visited along the path.

Return the maximum non-negative product modulo 109 + 7. If the maximum product is negative, return -1.

Notice that the modulo is performed after getting the maximum product.

Input: grid = [[-1,-2,-3],[-2,-3,-3],[-3,-3,-2]]
Output: -1
Explanation: It is not possible to get non-negative product in the path from (0, 0) to (2, 2), so return -1.

*/

export const maxProductPath = (grid: number[][]) => {
  let row = grid.length;
  let col = grid[0].length;
  let dp = new Array(row).fill(0).map(() => new Array(col));
  let mod = Math.pow(10, 9) + 7;

  let dfs = (i: number, j: number): number[] => {
    if (i < 0 || j < 0 || i >= row || j >= col) return [-Infinity, Infinity];

    if (i === row - 1 && j === col - 1) return [grid[i][j], grid[i][j]];

    if (dp[i][j] !== undefined) return [dp[i][j][0], dp[i][j][1]];

    let cell = grid[i][j];

    if (cell === 0) return [0, 0];

    const [max1, min1] = dfs(i, j + 1);
    const [max2, min2] = dfs(i + 1, j);

    if (cell <= 0)
      return (dp[i][j] = [
        cell * Math.min(min1, min2),
        cell * Math.max(max1, max2),
      ]);

    return (dp[i][j] = [
      cell * Math.max(max1, max2),
      cell * Math.min(min1, min2),
    ]);
  };

  let res = Math.max(...dfs(0, 0));

  return res < 0 ? -1 : res % mod;
};

console.log(
  maxProductPath([
    [-1, -2, -3],
    [-2, -3, -3],
    [-3, -3, -2],
  ])
);

/*

You are given a 0-indexed m x n integer matrix grid and an integer k. You are currently at position (0, 0) and you want to reach position (m - 1, n - 1) moving only down or right.

Return the number of paths where the sum of the elements on the path is divisible by k. Since the answer may be very large, return it modulo 109 + 7.

Input: grid = [[5,2,4],[3,0,5],[0,7,2]], k = 3
Output: 2
Explanation: There are two paths where the sum of the elements on the path is divisible by k.
The first path highlighted in red has a sum of 5 + 2 + 4 + 5 + 2 = 18 which is divisible by 3.
The second path highlighted in blue has a sum of 5 + 3 + 0 + 5 + 2 = 15 which is divisible by 3.

*/

export const numberOfPaths = (grid: number[][], k: number) => {
  let row = grid.length;
  let col = grid[0].length;
  let mod = Math.pow(10, 9) + 7;
  let dp = new Array(row)
    .fill(0)
    .map(() => new Array(col).fill(0).map(() => new Array()));

  let recurse = (i: number, j: number, rem: number): number => {
    if (i >= row || j >= col) return 0;

    if (dp[i][j][rem] !== undefined) return dp[i][j][rem];

    if (i === row - 1 && j === col - 1)
      return Number((grid[i][j] + rem) % k === 0);

    return (
      (dp[i][j][rem] =
        recurse(i, j + 1, (grid[i][j] + rem) % k) +
        recurse(i + 1, j, (grid[i][j] + rem) % k)) % mod
    );
  };

  return recurse(0, 0, 0);
};

console.log(
  numberOfPaths(
    [
      [5, 2, 4],
      [3, 0, 5],
      [0, 7, 2],
    ],
    3
  )
);

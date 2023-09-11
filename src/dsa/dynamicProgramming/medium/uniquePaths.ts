/*

There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

The test cases are generated so that the answer will be less than or equal to 2 * 109.

Input: m = 3, n = 2
Output: 3
Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Down -> Down
2. Down -> Down -> Right
3. Down -> Right -> Down

*/

export const uniquePathsTopDown = (m: number, n: number) => {
  let cache: Record<string, number> = {};

  let recurse = (i: number, j: number): number => {
    let key = i + "," + j;

    if (key in cache) return cache[key];

    if (i < 0 || j < 0 || i >= m || j >= n) return 0;

    if (i === m - 1 && j === n - 1) return 1;

    cache[key] = recurse(i + 1, j) + recurse(i, j + 1);

    return cache[key];
  };

  return recurse(0, 0);
};

export const uniquePaths = (m: number, n: number) => {
  let dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
  dp[0][1] = 1;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[m][n];
};

console.log(uniquePaths(3, 3));

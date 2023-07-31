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

export const uniquePaths = (m: number, n: number) => {
  let obj: Record<string, number> = {};

  let helper = (m: number, n: number): number => {
    let key = m + "," + n;

    if (key in obj) return obj[key];

    if (m === 0 || n === 0) return 0;

    if (m === 1 && n === 1) return 1;

    obj[key] = helper(m - 1, n) + helper(m, n - 1);

    return obj[key];
  };

  return helper(m, n);
};

console.log(uniquePaths(3, 2));

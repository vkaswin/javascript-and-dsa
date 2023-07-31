/*

You are given an m x n integer array grid. There is a robot initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

An obstacle and space are marked as 1 or 0 respectively in grid. A path that the robot takes cannot include any square that is an obstacle.

Return the number of possible unique paths that the robot can take to reach the bottom-right corner.

The testcases are generated so that the answer will be less than or equal to 2 * 109.

Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
Output: 2
Explanation: There is one obstacle in the middle of the 3x3 grid above.
There are two ways to reach the bottom-right corner:
1. Right -> Right -> Down -> Down
2. Down -> Down -> Right -> Right

*/

export const uniquePathsWithObstacles = (obstacleGrid: number[][]) => {
  let obj: Record<string, number> = {};
  let row = obstacleGrid.length;
  let column = obstacleGrid[0].length;

  let helper = (m: number, n: number) => {
    let key = m + "," + n;
    if (key in obj) return obj[key];
    if (m === 0 || n === 0 || obstacleGrid[m - 1][n - 1] === 1) return 0;
    if (m === 1 && n === 1) return 1;
    obj[key] = helper(m - 1, n) + helper(m, n - 1);
    return obj[key];
  };

  return helper(row, column);
};

console.log(uniquePathsWithObstacles([[1]]));

/*

You are given a 0-indexed 2D integer array grid of size m x n. Each cell has one of two values:

0 represents an empty cell,
1 represents an obstacle that may be removed.
You can move up, down, left, or right from and to an empty cell.

Return the minimum number of obstacles to remove so you can move from the upper left corner (0, 0) to the lower right corner (m - 1, n - 1).

Input: grid = [[0,1,1],[1,1,0],[1,1,0]]
Output: 2
Explanation: We can remove the obstacles at (0, 1) and (0, 2) to create a path from (0, 0) to (2, 2).
It can be shown that we need to remove at least 2 obstacles, so we return 2.
Note that there may be other ways to remove 2 obstacles to create a path.

*/

export const minimumObstacles = (grid: number[][]) => {
  let row = grid.length;
  let col = grid[0].length;
  let queue: number[][] = [[0, 0]];
  let obstacles: number[][] = new Array(row)
    .fill(0)
    .map(() => new Array(col).fill(Infinity));
  obstacles[0][0] = grid[0][0];
  let directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  while (queue.length) {
    let next: number[][] = [];

    for (let [i, j] of queue) {
      for (let [x, y] of directions) {
        x += i;
        y += j;

        if (x < 0 || y < 0 || x >= row || y >= col) continue;

        let temp = obstacles[i][j] + grid[x][y];

        if (temp >= obstacles[x][y]) continue;

        obstacles[x][y] = temp;

        next.push([x, y]);
      }
    }

    queue = next;
  }

  return obstacles[row - 1][col - 1];
};

console.log(
  minimumObstacles([
    [0, 1, 0, 0, 0],
    [0, 1, 0, 1, 0],
    [0, 0, 0, 1, 0],
  ])
);

/*

You are given an m x n integer matrix grid where each cell is either 0 (empty) or 1 (obstacle). You can move up, down, left, or right from and to an empty cell in one step.

Return the minimum number of steps to walk from the upper left corner (0, 0) to the lower right corner (m - 1, n - 1) given that you can eliminate at most k obstacles. If it is not possible to find such walk return -1.

Input: grid = [[0,0,0],[1,1,0],[0,0,0],[0,1,1],[0,0,0]], k = 1
Output: 6
Explanation: 
The shortest path without eliminating any obstacle is 10.
The shortest path with one obstacle elimination at position (3,2) is 6. Such path is (0,0) -> (0,1) -> (0,2) -> (1,2) -> (2,2) -> (3,2) -> (4,2).

*/

export const shortestPath = (grid: number[][], k: number) => {
  let queue: number[][] = [[0, 0, k]];
  let row = grid.length;
  let col = grid[0].length;
  let visited = new Set<string>();
  let distance = 0;
  let directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  while (queue.length) {
    let next: number[][] = [];

    for (let [i, j, obstacleCount] of queue) {
      let key = `${i},${j},${obstacleCount}`;

      if (visited.has(key) || obstacleCount < 0) continue;

      if (i === row - 1 && j === col - 1) return distance;

      visited.add(key);

      for (let [x, y] of directions) {
        x += i;
        y += j;

        if (
          x < 0 ||
          y < 0 ||
          x >= row ||
          y >= col ||
          (grid[x][y] === 1 && !(obstacleCount > 0))
        )
          continue;

        next.push([x, y, grid[x][y] === 1 ? obstacleCount - 1 : obstacleCount]);
      }
    }

    queue = next;
    distance++;
  }

  return -1;
};

console.log(
  shortestPath(
    [
      [0, 0, 0],
      [1, 1, 0],
      [0, 0, 0],
      [0, 1, 1],
      [0, 0, 0],
    ],
    1
  )
);

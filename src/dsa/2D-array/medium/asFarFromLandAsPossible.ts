/*

Given an n x n grid containing only values 0 and 1, where 0 represents water and 1 represents land, find a water cell such that its distance to the nearest land cell is maximized, and return the distance. If no land or water exists in the grid, return -1.

The distance used in this problem is the Manhattan distance: the distance between two cells (x0, y0) and (x1, y1) is |x0 - x1| + |y0 - y1|.

Input: grid = [[1,0,1],[0,0,0],[1,0,1]]
Output: 2
Explanation: The cell (1, 1) is as far as possible from all the land with distance 2.

*/

export const maxDistance = (grid: number[][]) => {
  let queue: number[][] = [];
  let n = grid.length;
  let visited = new Set<string>();
  let directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  let maxDistance = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j]) queue.push([i, j, 0]);
    }
  }

  while (queue.length) {
    let next: number[][] = [];

    for (let [i, j, distance] of queue) {
      let key = i + "," + j;

      if (visited.has(key)) continue;

      maxDistance = Math.max(maxDistance, distance);

      visited.add(key);

      for (let [x, y] of directions) {
        x += i;
        y += j;

        if (x < 0 || y < 0 || x >= n || y >= n || grid[x][y]) continue;

        next.push([x, y, distance + 1]);
      }
    }

    queue = next;
  }

  return maxDistance || -1;
};

console.log(
  maxDistance([
    [1, 0, 1],
    [0, 0, 0],
    [1, 0, 1],
  ])
);

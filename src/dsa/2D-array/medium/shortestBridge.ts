/*

You are given an n x n binary matrix grid where 1 represents land and 0 represents water.

An island is a 4-directionally connected group of 1's not connected to any other 1's. There are exactly two islands in grid.

You may change 0's to 1's to connect the two islands to form one island.

Return the smallest number of 0's you must flip to connect the two islands.

Input: grid = [[0,1,0],[0,0,0],[0,0,1]]
Output: 2

*/

export const shortestBridge = (grid: number[][]) => {
  let n = grid.length;
  let queue: number[][] = [];
  let visited = new Set();
  let directions = [
    [0, -1],
    [0, 1],
    [1, 0],
    [-1, 0],
  ];

  let dfs = (i: number, j: number) => {
    let key = i + "," + j;
    if (
      i >= n ||
      j >= n ||
      i < 0 ||
      j < 0 ||
      visited.has(key) ||
      grid[i][j] !== 1
    )
      return;

    visited.add(key);
    queue.push([i, j]);

    for (let [x, y] of directions) {
      dfs(x + i, y + j);
    }
  };

  let bfs = () => {
    visited.clear();
    let distance = -1;

    while (queue.length) {
      let next: number[][] = [];

      for (let i = 0; i < queue.length; i++) {
        let [row, col] = queue[i];
        let key = row + "," + col;

        if (visited.has(key)) continue;

        if (grid[row][col] === 1 && distance > 0) return distance;

        visited.add(key);

        for (let [x, y] of directions) {
          x += row;
          y += col;
          if (x >= n || y >= n || x < 0 || y < 0) continue;
          next.push([x, y]);
        }
      }

      queue = next;
      distance++;
    }
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 0) continue;
      dfs(i, j);
      return bfs();
    }
  }
};

console.log(
  shortestBridge([
    [0, 1, 0],
    [0, 0, 0],
    [0, 0, 1],
  ])
);

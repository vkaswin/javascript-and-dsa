/*

You are given an m x n grid where each cell can have one of three values:

0 representing an empty cell,
1 representing a fresh orange, or
2 representing a rotten orange.
Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
Output: 4

*/

export const orangesRotting = (grid: number[][]) => {
  let queue: number[][] = [];
  let row = grid.length;
  let col = grid[0].length;
  let directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  let minute = 0;
  let fresh = 0;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === 1) fresh++;
      else if (grid[i][j] === 2) queue.push([i, j]);
    }
  }

  if (fresh === 0) return 0;

  while (queue.length && fresh) {
    let next = [];

    for (let i = 0; i < queue.length; i++) {
      let [m, n] = queue[i];

      for (let [x, y] of directions) {
        x += m;
        y += n;

        if (x < 0 || y < 0 || x >= row || y >= col || grid[x][y] !== 1)
          continue;

        fresh--;
        grid[x][y] = 2;
        next.push([x, y]);
      }
    }
    queue = next;
    minute++;
  }

  return fresh === 0 ? minute : -1;
};

console.log(
  orangesRotting([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ])
);

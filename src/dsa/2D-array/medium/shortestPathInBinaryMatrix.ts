/*

Given an n x n binary matrix grid, return the length of the shortest clear path in the matrix. If there is no clear path, return -1.

A clear path in a binary matrix is a path from the top-left cell (i.e., (0, 0)) to the bottom-right cell (i.e., (n - 1, n - 1)) such that:

All the visited cells of the path are 0.
All the adjacent cells of the path are 8-directionally connected (i.e., they are different and they share an edge or a corner).
The length of a clear path is the number of visited cells of this path.

Input: grid = [[0,0,0],[1,1,0],[1,1,0]]
Output: 4

*/

export const shortestPathBinaryMatrix = (grid: number[][]) => {
  let row = grid.length;
  let col = grid[0].length;

  if (grid[0][0] !== 0 || grid[row - 1][col - 1] !== 0) return -1;

  let visited = new Set();
  let directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
  ];

  let queue = [[0, 0, 1]];

  while (queue.length) {
    let next = [];

    for (let i = 0; i < queue.length; i++) {
      let [m, n, distance] = queue[i];
      let key = `${m},${n}`;

      if (m === row - 1 && n === col - 1) return distance;

      if (visited.has(key)) continue;

      visited.add(key);

      ++distance;

      for (let direction of directions) {
        let x = m + direction[0];
        let y = n + direction[1];

        if (
          x < 0 ||
          x >= row ||
          y < 0 ||
          y >= col ||
          visited.has(`${x},${y}`) ||
          grid[x][y] === 1
        )
          continue;

        next.push([x, y, distance]);
      }
    }

    queue = next;
  }

  return -1;
};

console.log(
  shortestPathBinaryMatrix([
    [0, 0, 0],
    [1, 1, 0],
    [1, 1, 0],
  ])
);

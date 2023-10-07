/*

Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.

The distance between two adjacent cells is 1.

Input: mat = [[0,0,0],[0,1,0],[1,1,1]]
Output: [[0,0,0],[0,1,0],[1,2,1]]

*/

export const updateMatrix = (mat: number[][]) => {
  let row = mat.length;
  let col = mat[0].length;
  let visited = new Set();
  let queue: [number, number][] = [];
  let directions = [
    [0, -1],
    [0, 1],
    [1, 0],
    [-1, 0],
  ];

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (mat[i][j] === 0) queue.push([i, j]);
    }
  }

  let distance = 0;

  while (queue.length) {
    let next: [number, number][] = [];

    for (let i = 0; i < queue.length; i++) {
      let [m, n] = queue[i];
      let key = m + "," + n;

      if (visited.has(key)) continue;

      if (mat[m][n] === 1) mat[m][n] = distance;

      visited.add(key);

      for (let [x, y] of directions) {
        x += m;
        y += n;

        if (x < 0 || y < 0 || x >= row || y >= col) continue;

        next.push([x, y]);
      }
    }

    queue = next;
    distance++;
  }

  return mat;
};

console.log(
  updateMatrix([
    [0, 0, 0],
    [0, 1, 0],
    [1, 1, 1],
  ])
);

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

export const nearestExit = (maze: string[][], entrance: number[]) => {
  let queue = [entrance];
  let row = maze.length;
  let col = maze[0].length;
  let directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  let steps = 0;

  while (queue.length) {
    let next: number[][] = [];

    for (let i = 0; i < queue.length; i++) {
      let [m, n] = queue[i];

      if (maze[m][n] !== ".") continue;

      maze[m][n] = "+";

      if (
        (m === 0 || n === 0 || m === row - 1 || n === col - 1) &&
        (m !== entrance[0] || n !== entrance[1])
      )
        return steps;

      for (let [x, y] of directions) {
        x += m;
        y += n;
        if (x < 0 || y < 0 || x >= row || y >= col || maze[x][y] !== ".")
          continue;

        next.push([x, y]);
      }
    }

    queue = next;
    steps++;
  }

  return -1;
};

console.log(
  nearestExit(
    [
      ["+", "+", "+"],
      [".", ".", "."],
      ["+", "+", "+"],
    ],
    [1, 0]
  )
);

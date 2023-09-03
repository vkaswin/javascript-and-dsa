function hasValidPath(grid: number[][]): boolean {
  let row = grid.length;
  let col = grid[0].length;
  let visited = new Set();
  let { top, left, bottom, right } = {
    left: [0, -1],
    right: [0, 1],
    top: [-1, 0],
    bottom: [1, 0],
  };
  let paths: Record<number, number[][]> = {
    1: [left, right],
    2: [top, bottom],
    3: [left, bottom],
    4: [right, bottom],
    5: [left, top],
    6: [right, top],
  };
  let queue: number[][] = [[0, 0]];

  while (queue.length) {
    let next: number[][] = [];

    for (let i = 0; i < queue.length; i++) {
      let [m, n] = queue[i];

      if (m === row - 1 && n === col - 1) return true;

      let key = m + "," + n;
      if (visited.has(key)) continue;

      visited.add(key);

      let directions = paths[grid[m][n]];

      for (let direction of directions) {
        let x = direction[0] + m;
        let y = direction[1] + n;

        if (
          x < 0 ||
          y < 0 ||
          x >= row ||
          y >= col ||
          !paths[grid[x][y]].some(
            (dir) => dir === directions[0] || dir === directions[1]
          )
        )
          continue;

        next.push([x, y]);
      }
    }

    queue = next;
  }
  return false;
}

console.log(
  hasValidPath([
    [2, 4, 3],
    [6, 5, 2],
  ])
);

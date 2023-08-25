export const wallsAndGates = (rooms: number[][]) => {
  let visited = new Set<string>();
  let row = rooms.length;
  let col = rooms[0].length;
  let queue: number[][] = [];
  let directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  let distance = 0;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (rooms[i][j] === 0) queue.push([i, j]);
    }
  }

  while (queue.length) {
    let next: number[][] = [];

    for (let i = 0; i < queue.length; i++) {
      let [m, n] = queue[i];
      let key = m + "," + n;

      if (visited.has(key)) continue;

      visited.add(key);

      rooms[m][n] = distance;

      for (let [x, y] of directions) {
        x += m;
        y += n;
        if (
          x < 0 ||
          y < 0 ||
          x >= row ||
          y >= col ||
          rooms[x][y] === 0 ||
          rooms[x][y] === -1
        )
          continue;
        next.push([x, y]);
      }
    }

    distance++;
    queue = next;
  }

  return rooms;
};

console.log(
  wallsAndGates([
    [2147483647, -1, 0, 2147483647],
    [2147483647, 2147483647, 2147483647, -1],
    [2147483647, -1, 2147483647, -1],
    [0, -1, 2147483647, 2147483647],
  ])
);

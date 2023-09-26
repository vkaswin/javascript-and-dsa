/*

You are given an m x n grid. Each cell of grid represents a street. The street of grid[i][j] can be:

1 which means a street connecting the left cell and the right cell.
2 which means a street connecting the upper cell and the lower cell.
3 which means a street connecting the left cell and the lower cell.
4 which means a street connecting the right cell and the lower cell.
5 which means a street connecting the left cell and the upper cell.
6 which means a street connecting the right cell and the upper cell.

You will initially start at the street of the upper-left cell (0, 0). A valid path in the grid is a path that starts from the upper left cell (0, 0) and ends at the bottom-right cell (m - 1, n - 1). The path should only follow the streets.

Notice that you are not allowed to change any street.

Return true if there is a valid path in the grid or false otherwise.

Input: grid = [[2,4,3],[6,5,2]]
Output: true
Explanation: As shown you can start at cell (0, 0) and visit all the cells of the grid to reach (m - 1, n - 1).

*/

export const hasValidPath = (grid: number[][]) => {
  let row = grid.length;
  let col = grid[0].length;
  let visited = new Set();
  let directions: Record<string, number[]> = {
    right: [0, 1],
    left: [0, -1],
    top: [-1, 0],
    bottom: [1, 0],
  };
  let paths: Record<number, Record<string, string>> = {
    1: { left: "right", right: "left" },
    2: { bottom: "top", top: "bottom" },
    3: { left: "right", bottom: "top" },
    4: { right: "left", bottom: "top" },
    5: { left: "right", top: "bottom" },
    6: { right: "left", top: "bottom" },
  };
  let queue: number[][] = [[0, 0]];

  while (queue.length) {
    let next: number[][] = [];

    for (let [i, j] of queue) {
      let key = `${i},${j}`;

      if (visited.has(key)) continue;

      if (i === row - 1 && j === col - 1) return true;

      visited.add(key);

      for (let key in directions) {
        let [x, y] = directions[key];

        x += i;
        y += j;

        if (x < 0 || y < 0 || x >= row || y >= col) continue;

        if (
          key in paths[grid[i][j]] &&
          paths[grid[i][j]][key] in paths[grid[x][y]]
        ) {
          next.push([x, y]);
        }
      }
    }

    queue = next;
  }

  return false;
};

console.log(
  hasValidPath([
    [4, 1],
    [6, 1],
  ])
);

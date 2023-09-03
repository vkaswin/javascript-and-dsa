/*

Given a 2D array of characters grid of size m x n, you need to find if there exists any cycle consisting of the same value in grid.

A cycle is a path of length 4 or more in the grid that starts and ends at the same cell. From a given cell, you can move to one of the cells adjacent to it - in one of the four directions (up, down, left, or right), if it has the same value of the current cell.

Also, you cannot move to the cell that you visited in your last move. For example, the cycle (1, 1) -> (1, 2) -> (1, 1) is invalid because from (1, 2) we visited (1, 1) which was the last visited cell.

Return true if any cycle of the same value exists in grid, otherwise, return false.

Input: grid = [["a","a","a","a"],["a","b","b","a"],["a","b","b","a"],["a","a","a","a"]]
Output: true
Explanation: There are two valid cycles shown in different colors in the image below:

*/

export const containsCycle = (grid: string[][]) => {
  let row = grid.length;
  let col = grid[0].length;
  let directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  let visited = new Set<string>();

  let bfs = (
    i: number,
    j: number,
    pRow: number,
    pCol: number,
    prev: string
  ): boolean => {
    let queue: Parameters<typeof bfs>[] = [[i, j, pRow, pCol, prev]];

    while (queue.length) {
      let next: Parameters<typeof bfs>[] = [];

      for (let i = 0; i < queue.length; i++) {
        let [m, n, pRow, pCol, prev] = queue[i];

        let key = m + "," + n;

        if (visited.has(key)) return true;

        visited.add(key);

        for (let [x, y] of directions) {
          x += m;
          y += n;

          if (
            x < 0 ||
            y < 0 ||
            x >= row ||
            y >= col ||
            (pRow === x && pCol === y) ||
            grid[x][y] !== prev
          )
            continue;

          next.push([x, y, m, n, grid[m][n]]);
        }
      }

      queue = next;
    }

    return false;
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < col; j++) {
      if (visited.has(i + "," + j)) continue;
      if (bfs(i, j, -1, -1, grid[i][j])) return true;
    }
  }

  return false;
};

console.log(
  containsCycle([
    ["b", "b"],
    ["b", "b"],
  ])
);

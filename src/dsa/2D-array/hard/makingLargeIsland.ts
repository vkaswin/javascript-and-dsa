/*

You are given an n x n binary matrix grid. You are allowed to change at most one 0 to be 1.

Return the size of the largest island in grid after applying this operation.

An island is a 4-directionally connected group of 1s.

Input: grid = [[1,0],[0,1]]
Output: 3
Explanation: Change one 0 to 1 and connect two 1s, then we get an island with area = 3.

*/

export const largestIsland = (grid: number[][]) => {
  let row = grid.length;
  let col = grid[0].length;
  let directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  let max = -Infinity;
  let arr = [0, 0];

  let dfs = (i: number, j: number, code: number): number => {
    if (i < 0 || j < 0 || i >= row || j >= col || grid[i][j] !== 1) return 0;

    grid[i][j] = code;

    return (
      1 + directions.reduce((acc, [x, y]) => acc + dfs(x + i, y + j, code), 0)
    );
  };

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (!grid[i][j]) continue;
      let code = arr.length;
      arr.push(dfs(i, j, code));
    }
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j]) continue;

      let set = new Set<number>();

      for (let [x, y] of directions) {
        x += i;
        y += j;
        if (x < 0 || y < 0 || x >= row || y >= col) continue;
        set.add(grid[x][y]);
      }

      let count = 1;

      for (let code of set) {
        count += arr[code];
      }

      max = Math.max(max, count);
    }
  }

  return max === -Infinity ? row * col : max;
};

console.log(
  largestIsland([
    [1, 1],
    [1, 0],
  ])
);

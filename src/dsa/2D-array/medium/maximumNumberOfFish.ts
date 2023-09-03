/*

You are given a 0-indexed 2D matrix grid of size m x n, where (r, c) represents:

A land cell if grid[r][c] = 0, or
A water cell containing grid[r][c] fish, if grid[r][c] > 0.
A fisher can start at any water cell (r, c) and can do the following operations any number of times:

Catch all the fish at cell (r, c), or
Move to any adjacent water cell.
Return the maximum number of fish the fisher can catch if he chooses his starting cell optimally, or 0 if no water cell exists.

An adjacent cell of the cell (r, c), is one of the cells (r, c + 1), (r, c - 1), (r + 1, c) or (r - 1, c) if it exists.

Input: grid = [[0,2,1,0],[4,0,0,3],[1,0,0,4],[0,3,2,0]]
Output: 7
Explanation: The fisher can start at cell (1,3) and collect 3 fish, then move to cell (2,3) and collect 4 fish.

*/

export const findMaxFish = (grid: number[][]) => {
  let row = grid.length;
  let col = grid[0].length;
  let visited = new Set<string>();
  let maxFish = 0;
  let directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  let dfs = (i: number, j: number): number => {
    let key = i + "," + j;
    if (
      i < 0 ||
      j < 0 ||
      i >= row ||
      j >= col ||
      visited.has(key) ||
      grid[i][j] === 0
    )
      return 0;

    visited.add(key);

    return directions.reduce((acc, [x, y]) => {
      return acc + dfs(x + i, y + j);
    }, grid[i][j]);
  };

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === 0 || visited.has(i + "," + j)) continue;
      maxFish = Math.max(maxFish, dfs(i, j));
    }
  }

  return maxFish;
};

console.log(findMaxFish([[6, 1, 10]]));

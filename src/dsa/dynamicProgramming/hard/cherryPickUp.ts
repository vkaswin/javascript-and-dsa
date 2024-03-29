/*

You are given an n x n grid representing a field of cherries, each cell is one of three possible integers.

0 means the cell is empty, so you can pass through,
1 means the cell contains a cherry that you can pick up and pass through, or
-1 means the cell contains a thorn that blocks your way.
Return the maximum number of cherries you can collect by following the rules below:

Starting at the position (0, 0) and reaching (n - 1, n - 1) by moving right or down through valid path cells (cells with value 0 or 1).
After reaching (n - 1, n - 1), returning to (0, 0) by moving left or up through valid path cells.
When passing through a path cell containing a cherry, you pick it up, and the cell becomes an empty cell 0.
If there is no valid path between (0, 0) and (n - 1, n - 1), then no cherries can be collected.

Input: grid = [[0,1,-1],[1,0,-1],[1,1,1]]
Output: 5
Explanation: The player started at (0, 0) and went down, down, right right to reach (2, 2).
4 cherries were picked up during this single trip, and the matrix becomes [[0,1,-1],[0,0,-1],[0,0,0]].
Then, the player went left, up, up, left to return home, picking up one more cherry.
The total number of cherries picked up is 5, and this is the maximum possible.

*/

export const cherryPickup = (grid: number[][]) => {
  let row = grid.length;
  let col = grid[0].length;
  let cache: Record<string, number> = {};

  let dfs = (r1: number, c1: number, r2: number, c2: number): number => {
    if (
      r1 < 0 ||
      r2 < 0 ||
      c1 < 0 ||
      c2 < 0 ||
      r1 >= row ||
      c1 >= col ||
      r2 >= row ||
      c2 >= col ||
      grid[r1][c1] === -1 ||
      grid[r2][c2] === -1
    )
      return -Infinity;

    let key = `${r1},${c1},${r2},${c2}`;

    if (key in cache) return cache[key];

    if (r1 == row - 1 && c1 === col - 1) return grid[r1][c1];
    else if (r2 === row - 1 && c2 === col - 1) return grid[r2][c2];

    let cherries = 0;

    if (r1 === r2 && c1 === c2) cherries += grid[r1][c1];
    else cherries += grid[r1][c1] + grid[r2][c2];

    return (cache[key] =
      cherries +
      Math.max(
        dfs(r1 + 1, c1, r2 + 1, c2), //vv;
        dfs(r1, c1 + 1, r2, c2 + 1), //hh
        dfs(r1 + 1, c1, r2, c2 + 1), //vh;
        dfs(r1, c1 + 1, r2 + 1, c2) //hv;
      ));
  };

  let max = dfs(0, 0, 0, 0);

  return max === -Infinity ? 0 : max;
};

console.log(
  cherryPickup([
    [0, 1, -1],
    [1, 0, -1],
    [1, 1, 1],
  ])
);

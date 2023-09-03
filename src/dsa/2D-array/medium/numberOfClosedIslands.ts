/*

Given a 2D grid consists of 0s (land) and 1s (water).  An island is a maximal 4-directionally connected group of 0s and a closed island is an island totally (all left, top, right, bottom) surrounded by 1s.

Return the number of closed islands.

Input: grid = [[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]]
Output: 2
Explanation: 
Islands in gray are closed because they are completely surrounded by water (group of 1s).

*/

export const closedIsland = (grid: number[][]) => {
  let row = grid.length;
  let col = grid[0].length;
  let visited = new Set<string>();
  let count = 0;

  let dfs = (i: number, j: number): boolean => {
    let key = i + "," + j;
    if (i < 0 || j < 0 || i >= row || j >= col) return false;

    if (grid[i][j] === 1 || visited.has(key)) return true;

    visited.add(key);

    let left = dfs(i, j - 1);
    let right = dfs(i, j + 1);
    let top = dfs(i - 1, j);
    let bottom = dfs(i + 1, j);

    return left && right && top && bottom;
  };

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === 0 && !visited.has(i + "," + j) && dfs(i, j)) count++;
    }
  }

  return count;
};

console.log(
  closedIsland([
    [1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1],
  ])
);

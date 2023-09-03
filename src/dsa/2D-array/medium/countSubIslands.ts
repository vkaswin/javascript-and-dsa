/*

You are given two m x n binary matrices grid1 and grid2 containing only 0's (representing water) and 1's (representing land). An island is a group of 1's connected 4-directionally (horizontal or vertical). Any cells outside of the grid are considered water cells.

An island in grid2 is considered a sub-island if there is an island in grid1 that contains all the cells that make up this island in grid2.

Return the number of islands in grid2 that are considered sub-islands.

Input: grid1 = [[1,1,1,0,0],[0,1,1,1,1],[0,0,0,0,0],[1,0,0,0,0],[1,1,0,1,1]], grid2 = [[1,1,1,0,0],[0,0,1,1,1],[0,1,0,0,0],[1,0,1,1,0],[0,1,0,1,0]]
Output: 3
Explanation: In the picture above, the grid on the left is grid1 and the grid on the right is grid2.
The 1s colored red in grid2 are those considered to be part of a sub-island. There are three sub-islands.

*/

export const countSubIslands = (grid1: number[][], grid2: number[][]) => {
  let row = grid1.length;
  let col = grid1[0].length;
  let visited = new Set<string>();
  let isSubIsland = true;
  let count = 0;
  let directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  let dfs = (i: number, j: number) => {
    let key = i + "," + j;

    if (
      i < 0 ||
      j < 0 ||
      i >= row ||
      j >= col ||
      visited.has(key) ||
      grid2[i][j] === 0
    )
      return;

    if (isSubIsland && grid1[i][j] !== 1) isSubIsland = false;

    visited.add(key);

    for (let [x, y] of directions) {
      dfs(x + i, y + j);
    }
  };

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid2[i][j] === 0 || visited.has(i + "," + j)) continue;

      dfs(i, j);
      if (isSubIsland) count++;
      isSubIsland = true;
    }
  }

  return count;
};

console.log(
  countSubIslands(
    [
      [1, 1, 1, 0, 0],
      [0, 1, 1, 1, 1],
      [0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0],
      [1, 1, 0, 1, 1],
    ],
    [
      [1, 1, 1, 0, 0],
      [0, 0, 1, 1, 1],
      [0, 1, 0, 0, 0],
      [1, 0, 1, 1, 0],
      [0, 1, 0, 1, 0],
    ]
  )
);

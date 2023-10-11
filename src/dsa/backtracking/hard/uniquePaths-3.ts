/*

You are given an m x n integer array grid where grid[i][j] could be:

1 representing the starting square. There is exactly one starting square.
2 representing the ending square. There is exactly one ending square.
0 representing empty squares we can walk over.
-1 representing obstacles that we cannot walk over.
Return the number of 4-directional walks from the starting square to the ending square, that walk over every non-obstacle square exactly once

Input: grid = [[1,0,0,0],[0,0,0,0],[0,0,0,2]]
Output: 4
Explanation: We have the following four paths: 
1. (0,0),(0,1),(0,2),(0,3),(1,3),(1,2),(1,1),(1,0),(2,0),(2,1),(2,2),(2,3)
2. (0,0),(0,1),(1,1),(1,0),(2,0),(2,1),(2,2),(1,2),(0,2),(0,3),(1,3),(2,3)
3. (0,0),(1,0),(2,0),(2,1),(2,2),(1,2),(1,1),(0,1),(0,2),(0,3),(1,3),(2,3)
4. (0,0),(1,0),(2,0),(2,1),(1,1),(0,1),(0,2),(0,3),(1,3),(1,2),(2,2),(2,3)

*/

export const uniquePathsIII = (grid: number[][]) => {
  let obstacles = new Set();
  let start: number[] = [];
  let end: number[] = [];
  let row = grid.length;
  let col = grid[0].length;
  let emptySquares = 2;
  let count = 0;
  let visited = new Set<string>();
  let directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === 1) start = [i, j];
      else if (grid[i][j] === 2) end = [i, j];
      else if (grid[i][j] === -1) obstacles.add(`${i},${j}`);
      else emptySquares++;
    }
  }

  let backtrack = (i: number, j: number) => {
    if (i === end[0] && j === end[1] && visited.size === emptySquares) {
      count++;
      return;
    }

    for (let [x, y] of directions) {
      x += i;
      y += j;

      let key = `${x},${y}`;

      if (
        x < 0 ||
        y < 0 ||
        x >= row ||
        y >= col ||
        visited.has(key) ||
        obstacles.has(key)
      )
        continue;

      visited.add(key);
      backtrack(x, y);
      visited.delete(key);
    }
  };

  visited.add(`${start[0]},${start[1]}`);

  backtrack(start[0], start[1]);

  return count;
};

console.log(
  uniquePathsIII([
    [1, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 2],
  ])
);

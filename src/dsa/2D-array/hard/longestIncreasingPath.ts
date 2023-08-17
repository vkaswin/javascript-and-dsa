/*

Given an m x n integers matrix, return the length of the longest increasing path in matrix.

From each cell, you can either move in four directions: left, right, up, or down. You may not move diagonally or move outside the boundary (i.e., wrap-around is not allowed).

Input: matrix = [[9,9,4],[6,6,8],[2,1,1]]
Output: 4
Explanation: The longest increasing path is [1, 2, 6, 9].

*/

const longestIncreasingPath = (matrix: number[][]) => {
  let row = matrix.length;
  let col = matrix[0].length;
  let cache: Record<string, number> = {};
  let directions = [
    [0, -1],
    [0, 1],
    [1, 0],
    [-1, 0],
  ];
  let maxLength = 0;

  let dfs = (i: number, j: number, prev: number) => {
    if (i < 0 || j < 0 || i >= row || j >= col || matrix[i][j] <= prev)
      return 0;

    let key = i + "," + j;

    if (cache[key]) return cache[key];

    let max = 1;

    for (let [x, y] of directions) {
      x += i;
      y += j;
      let len = 1 + dfs(x, y, matrix[i][j]);
      max = Math.max(max, len);
    }

    cache[key] = max;

    return max;
  };

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      maxLength = Math.max(maxLength, dfs(i, j, -Infinity));
    }
  }

  return maxLength;
};

console.log(
  longestIncreasingPath([
    [9, 9, 4],
    [6, 6, 8],
    [2, 1, 1],
  ])
);

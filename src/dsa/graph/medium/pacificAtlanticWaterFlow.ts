export const pacificAtlantic = (heights: number[][]) => {
  let pacific = new Set<string>();
  let atlantic = new Set<string>();
  let row = heights.length;
  let col = heights[0].length;
  let directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  let result: number[][] = [];

  let dfs = (
    i: number,
    j: number,
    prevHeight: number,
    visited: Set<string>
  ) => {
    let key = `${i},${j}`;
    if (
      i < 0 ||
      j < 0 ||
      i >= row ||
      j >= col ||
      visited.has(key) ||
      heights[i][j] < prevHeight
    )
      return;

    visited.add(key);

    for (let [x, y] of directions) {
      dfs(i + x, y + j, heights[i][j], visited);
    }
  };

  for (let i = 0; i < col; i++) {
    dfs(0, i, heights[0][i], pacific);
    dfs(row - 1, i, heights[row - 1][i], atlantic);
  }

  for (let i = 0; i < row; i++) {
    dfs(i, 0, heights[i][0], pacific);
    dfs(i, col - 1, heights[i][col - 1], atlantic);
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      let key = `${i},${j}`;
      if (pacific.has(key) && atlantic.has(key)) result.push([i, j]);
    }
  }

  return result;
};

console.log(
  pacificAtlantic([
    [1, 2, 2, 3, 5],
    [3, 2, 3, 4, 4],
    [2, 4, 5, 3, 1],
    [6, 7, 1, 4, 5],
    [5, 1, 1, 2, 4],
  ])
);

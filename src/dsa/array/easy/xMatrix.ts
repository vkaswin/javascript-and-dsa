/*

Input: grid = [[2,0,0,1],[0,3,1,0],[0,5,2,0],[4,0,0,2]]
Output: true
Explanation: Refer to the diagram above. 
An X-Matrix should have the green elements (diagonals) be non-zero and the red elements be 0.
Thus, grid is an X-Matrix.


*/

export const checkXMatrix = (grid: number[][]) => {
  let n = grid.length - 1;

  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      if (i === j && grid[i][j] === 0) return false;
      if (i === n - j && grid[i][j] === 0) return false;
      if (i !== j && i !== n - j && grid[i][j] !== 0) return false;
    }
  }

  return true;
};

console.log(
  checkXMatrix([
    [2, 0, 0, 1],
    [0, 3, 1, 0],
    [0, 5, 2, 0],
    [4, 0, 0, 2],
  ])
);

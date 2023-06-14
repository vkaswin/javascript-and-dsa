/*

Given a 0-indexed n x n integer matrix grid, return the number of pairs (ri, cj) such that row
ri and column cj are equal. A row and column pair is considered equal if they contain the same elements
in the same order (i.e., an equal array).

Input: grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]
Output: 3
Explanation: There are 3 equal row and column pairs:
- (Row 0, Column 0): [3,1,2,2]
- (Row 2, Column 2): [2,4,2,2]
- (Row 3, Column 2): [2,4,2,2]

*/

export const equalPairs = (grid: number[][]) => {
  let n = grid.length;
  let count = 0;

  let isEqual = (row: number, col: number) => {
    for (let i = 0; i < n; i++) {
      if (grid[row][i] !== grid[i][col]) return false;
    }

    return true;
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (isEqual(i, j)) count++;
    }
  }

  return count;
};

console.log(
  equalPairs([
    [3, 1, 2, 2],
    [1, 4, 4, 4],
    [2, 4, 2, 2],
    [2, 5, 2, 2],
  ])
);

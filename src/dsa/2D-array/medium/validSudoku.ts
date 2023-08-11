/*

Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.

Input: board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true

*/

function isValidSudoku(board: string[][]): boolean {
  let n = board.length;
  let rows = new Map<number, Set<string>>();
  let cols = new Map<number, Set<string>>();
  let grids = new Map<string, Set<string>>();

  for (let i = 0; i < n; i++) {
    rows.set(i, new Set());

    for (let j = 0; j < n; j++) {
      let val = board[i][j];

      if (val === ".") continue;

      let key = `${Math.floor(i / 3)},${Math.floor(j / 3)}`;

      if (!grids.has(key)) grids.set(key, new Set());

      if (!cols.has(j)) cols.set(j, new Set());

      if (
        rows.get(i)!.has(val) ||
        cols.get(j)!.has(val) ||
        grids.get(key)!.has(val)
      )
        return false;

      rows.get(i)!.add(val);
      cols.get(j)!.add(val);
      grids.get(key)!.add(val);
    }
  }

  return true;
}

console.log(
  isValidSudoku([
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);

/*

Write a program to solve a Sudoku puzzle by filling the empty cells.

A sudoku solution must satisfy all of the following rules:

Each of the digits 1-9 must occur exactly once in each row.
Each of the digits 1-9 must occur exactly once in each column.
Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
The '.' character indicates empty cells.

Input: board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
Output: [["5","3","4","6","7","8","9","1","2"],["6","7","2","1","9","5","3","4","8"],["1","9","8","3","4","2","5","6","7"],["8","5","9","7","6","1","4","2","3"],["4","2","6","8","5","3","7","9","1"],["7","1","3","9","2","4","8","5","6"],["9","6","1","5","3","7","2","8","4"],["2","8","7","4","1","9","6","3","5"],["3","4","5","2","8","6","1","7","9"]]


*/

export const solveSudoku = (board: string[][]) => {
  let emptySpaces: [number, number][] = [];
  let row = board.length;
  let col = board[0].length;
  let possibleNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let rows = new Map<number, Set<string>>();
  let columns = new Map<number, Set<string>>();
  let grids = new Map<string, Set<string>>();

  for (let i = 0; i < row; i++) {
    rows.set(i, new Set<string>());
    for (let j = 0; j < col; j++) {
      let val = board[i][j];
      let key = `${Math.floor(i / 3)},${Math.floor(j / 3)}`;
      if (!grids.has(key)) grids.set(key, new Set<string>());
      if (!columns.has(j)) columns.set(j, new Set<string>());
      if (val === ".") {
        emptySpaces.push([i, j]);
      } else {
        rows.get(i)!.add(val);
        columns.get(j)!.add(val);
        grids.get(key)!.add(val);
      }
    }
  }

  let isValid = (i: number, j: number, num: string) => {
    let key = `${Math.floor(i / 3)},${Math.floor(j / 3)}`;
    return !(
      rows.get(i)!.has(num) ||
      columns.get(j)!.has(num) ||
      grids.get(key)!.has(num)
    );
  };

  let addNumber = (i: number, j: number, num: string) => {
    let key = `${Math.floor(i / 3)},${Math.floor(j / 3)}`;
    rows.get(i)!.add(num);
    columns.get(j)!.add(num);
    grids.get(key)!.add(num);
    board[i][j] = num;
  };

  let removeNumber = (i: number, j: number, num: string) => {
    let key = `${Math.floor(i / 3)},${Math.floor(j / 3)}`;
    rows.get(i)!.delete(num);
    columns.get(j)!.delete(num);
    grids.get(key)!.delete(num);
    board[i][j] = "";
  };

  let recurse = (index: number) => {
    if (index >= emptySpaces.length) return true;

    let [row, col] = emptySpaces[index];
    for (let i = 0; i < possibleNumbers.length; i++) {
      if (!isValid(row, col, possibleNumbers[i])) continue;
      let num = possibleNumbers[i];
      addNumber(row, col, num);
      if (recurse(index + 1)) return true;
      removeNumber(row, col, num);
    }

    return false;
  };

  recurse(0);

  return board;
};

console.log(
  solveSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
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

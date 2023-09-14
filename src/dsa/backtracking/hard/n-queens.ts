/*

The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.

Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.

Input: n = 4
Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above

*/

export const solveNQueens = (n: number) => {
  let result: string[][] = [];
  let board: string[][] = [];
  let column = new Set();
  let negativeDiagonal = new Set();
  let positiveDiagonal = new Set();

  for (let i = 0; i < n; i++) {
    board.push(new Array(n).fill(""));
  }

  let addQueen = (row: number, col: number) => {
    positiveDiagonal.add(row + col);
    negativeDiagonal.add(row - col);
    column.add(col);
    board[row][col] = "Q";
  };

  let removeQueen = (row: number, col: number) => {
    positiveDiagonal.delete(row + col);
    negativeDiagonal.delete(row - col);
    column.delete(col);
    board[row][col] = "";
  };

  let isValid = (row: number, col: number) => {
    return !(
      column.has(col) ||
      positiveDiagonal.has(row + col) ||
      negativeDiagonal.has(row - col)
    );
  };

  let backTrack = (row: number) => {
    if (row === n) {
      result.push(board.map((row) => row.join(".")));
      return;
    }

    for (let i = 0; i < n; i++) {
      if (!isValid(row, i)) continue;
      addQueen(row, i);
      backTrack(row + 1);
      removeQueen(row, i);
    }
  };

  backTrack(0);

  return result;
};

console.log(solveNQueens(4));

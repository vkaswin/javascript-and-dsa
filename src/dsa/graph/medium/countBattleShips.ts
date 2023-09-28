/*

Given an m x n matrix board where each cell is a battleship 'X' or empty '.', return the number of the battleships on board.

Battleships can only be placed horizontally or vertically on board. In other words, they can only be made of the shape 1 x k (1 row, k columns) or k x 1 (k rows, 1 column), where k can be of any size. At least one horizontal or vertical cell separates between two battleships (i.e., there are no adjacent battleships).

Input: board = [["X",".",".","X"],[".",".",".","X"],[".",".",".","X"]]
Output: 2

*/

export const countBattleships = (board: string[][]) => {
  let row = board.length;
  let col = board[0].length;
  let ships = 0;

  let dfs = (i: number, j: number) => {
    if (i < 0 || j < 0 || i >= row || j >= col || board[i][j] !== "X") return;
    board[i][j] = ".";
    dfs(i + 1, j);
    dfs(i, j + 1);
  };

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (board[i][j] === ".") continue;
      dfs(i, j);
      ships++;
    }
  }

  return ships;
};

console.log(
  countBattleships([
    ["X", ".", ".", "X"],
    [".", ".", ".", "X"],
    [".", ".", ".", "X"],
  ])
);

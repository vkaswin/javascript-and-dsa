/*

Given an m x n grid of characters board and a string word, return true if word exists in the grid.
The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are 
horizontally or vertically neighboring. The same letter cell may not be used more than once.

Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true

*/

export const exist = (board: string[][], word: string) => {
  let row = board.length;
  let col = board[0].length;
  let len = word.length;

  let recurse = (i: number, j: number, index: number) => {
    if (index >= len) return true;

    if (i < 0 || i >= row || j < 0 || j >= col || word[index] !== board[i][j])
      return false;

    let pos = index + 1;

    board[i][j] = "#";

    if (
      recurse(i + 1, j, pos) ||
      recurse(i - 1, j, pos) ||
      recurse(i, j + 1, pos) ||
      recurse(i, j - 1, pos)
    )
      return true;

    board[i][j] = word[index];

    return false;
  };

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (board[i][j] === word[0] && recurse(i, j, 0)) return true;
    }
  }

  return false;
};

console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "D", "E"],
    ],
    "ABCCD"
  )
);

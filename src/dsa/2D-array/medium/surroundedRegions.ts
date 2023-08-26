/*

Given an m x n matrix board containing 'X' and 'O', capture all regions that are 4-directionally surrounded by 'X'.

A region is captured by flipping all 'O's into 'X's in that surrounded region.

Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
Explanation: Notice that an 'O' should not be flipped if:
- It is on the border, or
- It is adjacent to an 'O' that should not be flipped.
The bottom 'O' is on the border, so it is not flipped.
The other three 'O' form a surrounded region, so they are flipped.

*/

export const solve = (board: string[][]) => {
  let row = board.length;
  let col = board[0].length;
  let directions = [
    [1, 0],
    [-1, 0],
    [0, -1],
    [0, 1],
  ];

  let dfs = (i: number, j: number) => {
    let key = i + "," + j;
    if (i < 0 || j < 0 || i >= row || j >= col || board[i][j] !== "O") return;

    board[i][j] = "#";

    for (let [x, y] of directions) {
      dfs(i + x, j + y);
    }
  };

  for (let i = 0; i < row; i++) {
    dfs(i, 0);
    dfs(i, col - 1);
  }

  for (let i = 0; i < col; i++) {
    dfs(0, i);
    dfs(row - 1, i);
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (board[i][j] === "X") continue;
      board[i][j] = board[i][j] === "#" ? "O" : "X";
    }
  }

  return board;
};

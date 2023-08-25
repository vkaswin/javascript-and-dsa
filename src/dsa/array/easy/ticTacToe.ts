/*

Tic-tac-toe is played by two players A and B on a 3 x 3 grid. The rules of Tic-Tac-Toe are:

Players take turns placing characters into empty squares ' '.
The first player A always places 'X' characters, while the second player B always places 'O' characters.
'X' and 'O' characters are always placed into empty squares, never on filled ones.
The game ends when there are three of the same (non-empty) character filling any row, column, or diagonal.
The game also ends if all squares are non-empty.
No more moves can be played if the game is over.
Given a 2D integer array moves where moves[i] = [rowi, coli] indicates that the ith move will be played on grid[rowi][coli]. return the winner of the game if it exists (A or B). In case the game ends in a draw return "Draw". If there are still movements to play return "Pending".

You can assume that moves is valid (i.e., it follows the rules of Tic-Tac-Toe), the grid is initially empty, and A will play first.

Input: moves = [[0,0],[2,0],[1,1],[2,1],[2,2]]
Output: "A"
Explanation: A wins, they always play first.

*/

export const tictactoe = (moves: number[][]) => {
  let board = [];

  for (let i = 0; i < 3; i++) {
    board[i] = new Array(3).fill("");
  }

  let isATurn = true;

  for (let i = 0; i < moves.length; i++) {
    let [row, col] = moves[i];
    board[row][col] = isATurn ? "X" : "O";
    isATurn = !isATurn;
  }

  board = board.flat();

  let possibilites = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [2, 5, 8],
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let [a, b, c] of possibilites) {
    if (board[a] && board[a] === board[b] && board[a] === board[c])
      return board[a] === "X" ? "A" : "B";
  }

  return moves.length === 9 ? "Draw" : "Pending";
};

console.log(
  tictactoe([
    [0, 0],
    [2, 0],
    [1, 1],
    [2, 1],
    [2, 2],
  ])
);

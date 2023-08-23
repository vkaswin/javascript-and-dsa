/*

According to Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

Any live cell with fewer than two live neighbors dies as if caused by under-population.
Any live cell with two or three live neighbors lives on to the next generation.
Any live cell with more than three live neighbors dies, as if by over-population.
Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously. Given the current state of the m x n grid board, return the next state.

Input: board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]

*/

export const gameOfLife = (board: number[][]) => {
  let row = board.length;
  let col = board[0].length;
  let directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
  ];

  let checkLiveNeighbors = (i: number, j: number) => {
    let count = 0;

    for (let [x, y] of directions) {
      x += i;
      y += j;
      if (x < 0 || y < 0 || x >= row || y >= col || board[x][y] < 1) continue;
      count++;
    }

    return count;
  };

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      let count = checkLiveNeighbors(i, j);
      console.log(count);
      if (board[i][j] === 1) board[i][j] = count === 2 || count == 3 ? 2 : 1;
      else if (count === 3) board[i][j] = -1;
    }
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      board[i][j] = board[i][j] === -1 || board[i][j] === 2 ? 1 : 0;
    }
  }

  return board;
};

console.log(
  gameOfLife([
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0],
  ])
);
/*
Number Maping
Old New
 0   0   0
 0   1   -1
 1   0   1
 1   1   2
*/

/*

Given an m x n grid of characters board and a string word, return true if word exists in the grid.
The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are 
horizontally or vertically neighboring. The same letter cell may not be used more than once.

Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true

*/

export const exist = (board: string[][], word: string) => {};

console.log(
  exist(
    [
      ["A", "B", "F", "C"],
      ["S", "F", "D", "S"],
      ["A", "F", "F", "E"],
    ],
    "ABCED"
  )
);

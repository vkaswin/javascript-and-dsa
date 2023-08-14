/*

Given an m x n board of characters and a list of strings words, return all words on the board.

Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

Input: board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]
Output: ["eat","oath"]

*/

class TireNode {
  constructor(
    public value: string | null = null,
    public word: string | null = null,
    public children: Record<string, TireNode> = {}
  ) {}
}

export const findWords = (board: string[][], words: string[]) => {
  let root: TireNode = new TireNode();

  for (let word of words) {
    let node = root;

    for (let char of word) {
      if (!node.children[char]) node.children[char] = new TireNode(char);
      node = node.children[char];
    }

    node.word = word;
  }

  let row = board.length;
  let col = board[0].length;

  let result: string[] = [];

  let recurse = (i: number, j: number, root: TireNode) => {
    if (i < 0 || i >= row || j < 0 || j >= col || !root.children[board[i][j]])
      return;

    let word = board[i][j];

    root = root.children[word];
    if (root.word) {
      result.push(root.word);
      root.word = null;
    }

    board[i][j] = "#";

    recurse(i - 1, j, root);
    recurse(i + 1, j, root);
    recurse(i, j - 1, root);
    recurse(i, j + 1, root);

    board[i][j] = word;
  };

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (root.children[board[i][j]]) recurse(i, j, root);
    }
  }

  return result;
};

console.log(
  findWords(
    [
      ["o", "a", "a", "n"],
      ["e", "t", "a", "e"],
      ["i", "h", "k", "r"],
      ["i", "f", "l", "v"],
    ],
    ["oath", "pea", "eat", "rain"]
  )
);

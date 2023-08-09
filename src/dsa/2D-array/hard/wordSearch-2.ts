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

  let buildTrie = (word: string) => {
    let node: TireNode = root;

    for (let i = 0; i < word.length; i++) {
      let char = word[i];
      if (!node.children[char]) node.children[char] = new TireNode(char);
      node = node.children[char];
    }

    node.word = word;
  };

  for (let word of words) {
    buildTrie(word);
  }

  let row = board.length;
  let col = board[0].length;

  let result: string[] = [];
  let visited = new Set<string>();

  let recurse = (i: number, j: number, root: TireNode) => {
    if (visited.has(`${i}${j}`)) return;

    root = root.children[board[i][j]];

    if (root.word) {
      result.push(root.word);
      root.word = null;
    }

    visited.add(`${i}${j}`);

    if (i - 1 >= 0 && root.children[board[i - 1][j]]) recurse(i - 1, j, root);

    if (i + 1 < row && root.children[board[i + 1][j]]) recurse(i + 1, j, root);

    if (j - 1 >= 0 && root.children[board[i][j - 1]]) recurse(i, j - 1, root);

    if (j + 1 < col && root.children[board[i][j + 1]]) recurse(i, j + 1, root);

    visited.delete(`${i}${j}`);
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
// [
//   ["o", "a", "b", "n"],
//   ["o", "t", "a", "e"],
//   ["a", "h", "k", "r"],
//   ["a", "f", "l", "v"],
// ];
// ["oa","oaa"]
// ["oa","oa","oaa"]-outoput
// ["oa","oaa"] - expected

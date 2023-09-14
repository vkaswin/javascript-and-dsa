/*

Given an array of strings words representing an English Dictionary, return the longest word in words that can be built one character at a time by other words in words.

If there is more than one possible answer, return the longest word with the smallest lexicographical order. If there is no answer, return the empty string.

Note that the word should be built from left to right with each additional character being added to the end of a previous word. 

Input: words = ["a","banana","app","appl","ap","apply","apple"]
Output: "apple"
Explanation: Both "apply" and "apple" can be built from other words in the dictionary. However, "apple" is lexicographically smaller than "apply".

*/

export class TireNode {
  constructor(
    public value: string | null = null,
    public word: string | null = null,
    public children: Record<string, TireNode> = {}
  ) {}
}

export const longestWord = (words: string[]) => {
  let root = new TireNode();
  let str = "";

  for (let word of words) {
    let node = root;

    for (let char of word) {
      if (!node.children[char]) node.children[char] = new TireNode(char);
      node = node.children[char];
    }

    node.word = word;
  }

  let dfs = (root: TireNode) => {
    if (root.word) {
      if (root.word.length > str.length) str = root.word;
      if (str.length === root.word.length)
        str = str.localeCompare(root.word) === -1 ? str : root.word;
    }

    for (let char in root.children) {
      if (root.children[char].word) dfs(root.children[char]);
    }
  };

  dfs(root);

  return str;
};

console.log(
  longestWord(["a", "banana", "app", "appl", "ap", "apply", "apple"])
);

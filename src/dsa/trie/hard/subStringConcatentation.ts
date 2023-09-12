/*

You are given a string s and an array of strings words. All the strings of words are of the same length.

A concatenated substring in s is a substring that contains all the strings of any permutation of words concatenated.

For example, if words = ["ab","cd","ef"], then "abcdef", "abefcd", "cdabef", "cdefab", "efabcd", and "efcdab" are all concatenated strings. "acdbef" is not a concatenated substring because it is not the concatenation of any permutation of words.
Return the starting indices of all the concatenated substrings in s. You can return the answer in any order.

Input: s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]
Output: []
Explanation: Since words.length == 4 and words[i].length == 4, the concatenated substring has to be of length 16.
There is no substring of length 16 in s that is equal to the concatenation of any permutation of words.
We return an empty array.

*/

class TireNode {
  constructor(
    public val: string | null = null,
    public word: string | null = null,
    public children: Record<string, TireNode> = {}
  ) {}
}

export function findSubstring(s: string, words: string[]): number[] {
  let indexes: number[] = [];
  let root = new TireNode();
  let concatLength = 0;
  let freq = new Map<string, number>();

  for (let word of words) {
    let node = root;
    for (let char of word) {
      if (!node.children[char]) node.children[char] = new TireNode(char);
      node = node.children[char];
    }
    node.word = word;
    concatLength += word.length;
    freq.set(word, (freq.get(word) || 0) + 1);
  }

  let search = (
    node: TireNode,
    index: number,
    currLength: number,
    visited = new Map<string, number>()
  ): boolean => {
    if (node.word) {
      if (visited.get(node.word)! >= freq.get(node.word)!) return false;
      visited.set(node.word, (visited.get(node.word) || 0) + 1);
      currLength += node.word.length;
      if (currLength === concatLength) return true;
      node = root;
    }

    if (!node.children[s[index]] || index >= s.length) return false;

    return search(node.children[s[index]], index + 1, currLength, visited);
  };

  for (let i = 0; s.length - i >= concatLength; i++) {
    if (root.children[s[i]] && search(root, i, 0)) indexes.push(i);
  }

  return indexes;
}

console.log(
  findSubstring("wordgoodgoodgoodbestword", ["word", "good", "best", "good"])
);

/*

In English, we have a concept called root, which can be followed by some other word to form another longer word - let's call this word successor. For example, when the root "an" is followed by the successor word "other", we can form a new word "another".

Given a dictionary consisting of many roots and a sentence consisting of words separated by spaces, replace all the successors in the sentence with the root forming it. If a successor can be replaced by more than one root, replace it with the root that has the shortest length.

Return the sentence after the replacement.

Input: dictionary = ["cat","bat","rat"], sentence = "the cattle was rattled by the battery"
Output: "the cat was rat by the bat"

*/

export class TireNode {
  constructor(
    public val: string | null,
    public children: Record<string, TireNode> = {},
    public word: string | null = null
  ) {}
}

export const replaceWords = (dictionary: string[], sentence: string) => {
  let root = new TireNode(null);
  let result: string[] = [];
  let arr = sentence.split(" ");

  for (let word of dictionary) {
    let node = root;

    for (let char of word) {
      if (!node.children[char]) node.children[char] = new TireNode(char);
      node = node.children[char];
    }

    node.word = word;
  }

  let search = (index: number, root: TireNode, word: string) => {
    if (!root.children[word[index]]) return "";

    root = root.children[word[index]];

    if (root.word) return root.word;

    return search(index + 1, root, word);
  };

  for (let word of arr) {
    result.push(search(0, root, word) || word);
  }

  return result.join(" ");
};

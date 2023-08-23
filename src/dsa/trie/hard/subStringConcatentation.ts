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

  let visited = new Map<string, number>();

  let search = (node: TireNode, index: number, currLength: number): boolean => {
    if (node.word) {
      if (visited.get(node.word)! >= freq.get(node.word)!) return false;
      visited.set(node.word, (visited.get(node.word) || 0) + 1);
      currLength += node.word.length;
      if (currLength === concatLength) return true;
      node = root;
    }

    if (!node.children[s[index]] || index >= s.length) return false;

    return search(node.children[s[index]], index + 1, currLength);
  };

  for (let i = 0; i < s.length; i++) {
    if (root.children[s[i]] && search(root, i, 0)) indexes.push(i);
    visited.clear();
  }

  return indexes;
}

console.log(
  findSubstring("wordgoodgoodgoodbestword", ["word", "good", "best", "good"])
);

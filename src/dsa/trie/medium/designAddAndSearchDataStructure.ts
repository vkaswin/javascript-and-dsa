export class TireNode {
  constructor(
    public value: string | null = null,
    public isWord: boolean = false,
    public children: Record<string, TireNode> = {}
  ) {}
}

export class WordDictionary {
  root: TireNode;

  constructor() {
    this.root = new TireNode();
  }

  addWord(word: string) {
    let node = this.root;

    for (let char of word) {
      if (!node.children[char]) node.children[char] = new TireNode(char);
      node = node.children[char];
    }

    node.isWord = true;
  }

  search(word: string, node: TireNode = this.root, index: number = 0): boolean {
    if (index === word.length) return node.isWord;

    let childrens = node.children;
    let char = word[index];

    if (char === ".") {
      for (let key in childrens) {
        if (this.search(word, childrens[key], index + 1)) return true;
      }
      return false;
    } else {
      if (!childrens[char]) return false;
      return this.search(word, childrens[char], index + 1);
    }
  }
}

let wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");
console.log(wordDictionary.search("pad")); // return False
console.log(wordDictionary.search("b")); // return True
console.log(wordDictionary.search(".ad")); // return True
console.log(wordDictionary.search("b..")); // return True

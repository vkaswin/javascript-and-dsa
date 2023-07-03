type ITireNode = {
  value: string | null;
  isWord: boolean;
  children: Record<string, ITireNode>;
};

export class Node {
  constructor(
    public value: string | null,
    public isWord: boolean = false,
    public children: Record<string, ITireNode> = {}
  ) {}
}

export class WordDictionary {
  root: ITireNode;

  constructor() {
    this.root = new Node(null);
  }

  addWord(word: string) {
    let childrens = this.root.children;

    for (let i = 0; i < word.length; i++) {
      let char = word[i];
      if (!(char in childrens)) childrens[char] = new Node(char);
      if (i === word.length - 1) childrens[char].isWord = true;
      childrens = childrens[char].children;
    }
  }

  search(word: string) {
    let find = (root: ITireNode, index: number): boolean => {
      if (index === word.length) return root.isWord;

      let childrens = root.children;
      let char = word[index];

      if (char === ".") {
        for (let key in childrens) {
          if (find(childrens[key], index + 1)) return true;
        }

        return false;
      } else {
        if (!(char in childrens)) return false;

        return find(childrens[char], index + 1);
      }
    };

    return find(this.root, 0);
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

/*

A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

Implement the Trie class:

Trie() Initializes the trie object.
void insert(String word) Inserts the string word into the trie.
boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.

Input
["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
[[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
Output
[null, null, true, false, true, null, true]

Explanation
Trie trie = new Trie();
trie.insert("apple");
trie.search("apple");   // return True
trie.search("app");     // return False
trie.startsWith("app"); // return True
trie.insert("app");
trie.search("app");     // return True

*/

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

export class Trie {
  private root: ITireNode;

  constructor() {
    this.root = new Node(null);
  }

  insert(word: string): void {
    let childrens = this.root.children;

    for (let i = 0; i < word.length; i++) {
      let char = word[i];

      if (!(char in childrens)) childrens[char] = new Node(char);
      if (i === word.length - 1) childrens[char].isWord = true;
      childrens = childrens[char].children;
    }
  }

  search(word: string) {
    let childrens = this.root.children;

    for (let i = 0; i < word.length; i++) {
      let char = word[i];

      if (
        !(char in childrens) ||
        (i === word.length - 1 && !childrens[char].isWord)
      )
        return false;

      childrens = childrens[char].children;
    }

    return true;
  }

  startsWith(prefix: string) {
    let childrens = this.root.children;

    for (let char of prefix) {
      if (!(char in childrens)) return false;
      childrens = childrens[char].children;
    }

    return true;
  }
}

let trie = new Trie();
trie.insert("app");
trie.insert("apple");
trie.insert("beer");
trie.insert("add");
trie.insert("jam");
trie.insert("rental");
trie.insert("apps");
console.log(trie.search("app"));

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
    let root = this.root;

    for (let char of word) {
      if (!root.children[char]) root.children[char] = new Node(char);
      root = root.children[char];
    }

    root.isWord = true;
  }

  traverse(word: string) {
    let root = this.root;
    for (let char of word) {
      if (!root.children[char]) return;
      root = root.children[char];
    }
    return root;
  }

  search(word: string) {
    let node = this.traverse(word);
    return node ? node.isWord : false;
  }

  startsWith(prefix: string) {
    let node = this.traverse(prefix);
    return node !== undefined;
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

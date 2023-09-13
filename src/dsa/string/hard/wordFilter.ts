/*

Design a special dictionary that searches the words in it by a prefix and a suffix.

Implement the WordFilter class:

WordFilter(string[] words) Initializes the object with the words in the dictionary.
f(string pref, string suff) Returns the index of the word in the dictionary, which has the prefix pref and the suffix suff. If there is more than one valid index, return the largest of them. If there is no such word in the dictionary, return -1.


Input
["WordFilter", "f"]
[[["apple"]], ["a", "e"]]
Output
[null, 0]
Explanation
WordFilter wordFilter = new WordFilter(["apple"]);
wordFilter.f("a", "e"); // return 0, because the word at index 0 has prefix = "a" and suffix = "e".


*/

class WordFilter {
  cache: Record<string, number> = {};

  constructor(public words: string[]) {}

  f(pref: string, suff: string): number {
    let key = `${pref}-${suff}`;

    if (key in this.cache) return this.cache[key];

    let index = -1;

    for (let i = this.words.length - 1; i >= 0; i--) {
      let word = this.words[i];
      if (word.startsWith(pref) && word.endsWith(suff)) {
        index = i;
        break;
      }
    }

    this.cache[key] = index;

    return index;
  }
}

let wordFilter = new WordFilter(["apple"]);
console.log(wordFilter.f("a", "e")); // return 0, because the word at index 0 has prefix = "a" and suffix = "e".

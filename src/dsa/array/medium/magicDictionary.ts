/*

Design a data structure that is initialized with a list of different words. Provided a string, you should determine if you can change exactly one character in this string to match any word in the data structure.

Implement the MagicDictionary class:

MagicDictionary() Initializes the object.
void buildDict(String[] dictionary) Sets the data structure with an array of distinct strings dictionary.
bool search(String searchWord) Returns true if you can change exactly one character in searchWord to match any string in the data structure, otherwise returns false.

Input
["MagicDictionary", "buildDict", "search", "search", "search", "search"]
[[], [["hello", "leetcode"]], ["hello"], ["hhllo"], ["hell"], ["leetcoded"]]
Output
[null, null, false, true, false, false]

*/

export class MagicDictionary {
  dictionary: string[] = [];

  buildDict(dictionary: string[]) {
    this.dictionary = dictionary;
  }

  isMatch(str1: string, str2: string) {
    let count = 0;

    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) count++;
    }

    return count === 1;
  }

  search(searchWord: string) {
    for (let word of this.dictionary) {
      if (word.length === searchWord.length && this.isMatch(word, searchWord))
        return true;
    }

    return false;
  }
}

let magicDictionary = new MagicDictionary();
magicDictionary.buildDict(["hello", "leetcode"]);
console.log(magicDictionary.search("hello")); // return False
console.log(magicDictionary.search("hhllo")); // We can change the second 'h' to 'e' to match "hello" so we return True
console.log(magicDictionary.search("hell")); // return False
console.log(magicDictionary.search("leetcoded")); // return False

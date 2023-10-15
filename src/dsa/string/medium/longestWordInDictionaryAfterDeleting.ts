/*

Given a string s and a string array dictionary, return the longest string in the dictionary that can be formed by deleting some of the given string characters. If there is more than one possible result, return the longest word with the smallest lexicographical order. If there is no possible result, return the empty string.

Input: s = "abpcplea", dictionary = ["ale","apple","monkey","plea"]
Output: "apple"

*/

export const findLongestWord = (s: string, dictionary: string[]) => {
  let res = "";

  for (let word of dictionary) {
    let i = 0;
    for (let char of s) {
      if (char === word[i]) i++;
    }

    if (i !== word.length) continue;
    if (!res) res = word;
    else if (word.length > res.length) res = word;
    else if (word.length === res.length)
      res = res.localeCompare(word) === -1 ? res : word;
  }

  return res;
};

console.log(findLongestWord("aaa", ["aaa", "aa", "a"]));

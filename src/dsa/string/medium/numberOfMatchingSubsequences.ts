/*

Given a string s and an array of strings words, return the number of words[i] that is a subsequence of s.

A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

For example, "ace" is a subsequence of "abcde".

Input: s = "abcde", words = ["a","bb","acd","ace"]
Output: 3
Explanation: There are three strings in words that are a subsequence of s: "a", "acd", "ace".

*/

export const numMatchingSubseq = (s: string, words: string[]) => {
  let count = 0;
  let map = new Map<string, boolean>();

  let isSubsequence = (word: string) => {
    if (map.has(word)) return map.get(word);

    let i = 0;

    for (let char of s) {
      if (i === word.length) break;
      if (char === word[i]) i++;
    }

    map.set(word, i === word.length);

    return map.get(word);
  };

  for (let word of words) {
    if (isSubsequence(word)) count++;
  }

  return count;
};

console.log(numMatchingSubseq("abcde", ["a", "bb", "acd", "ace"]));

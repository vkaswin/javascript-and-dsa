/*

You are given an array of words where each word consists of lowercase English letters.

wordA is a predecessor of wordB if and only if we can insert exactly one letter anywhere in wordA without changing the order of the other characters to make it equal to wordB.

For example, "abc" is a predecessor of "abac", while "cba" is not a predecessor of "bcad".
A word chain is a sequence of words [word1, word2, ..., wordk] with k >= 1, where word1 is a predecessor of word2, word2 is a predecessor of word3, and so on. A single word is trivially a word chain with k == 1.

Return the length of the longest possible word chain with words chosen from the given list of words.

Input: words = ["a","b","ba","bca","bda","bdca"]
Output: 4
Explanation: One of the longest word chains is ["a","ba","bda","bdca"].

*/

export const longestStrChain = (words: string[]) => {
  words.sort((a, b) => a.length - b.length);

  let dp = new Array(words.length).fill(Infinity);

  let compare = (str1: string, str2: string) => {
    if (Math.abs(str1.length - str2.length) !== 1) return false;

    let i = 0;

    for (let char of str2) {
      if (str1[i] === char) i++;
    }

    return i === str1.length;
  };

  for (let i = words.length - 1; i >= 0; i--) {
    let max = 1;

    for (let j = i + 1; j < words.length; j++) {
      if (!compare(words[i], words[j])) continue;

      max = Math.max(max, 1 + dp[j]);
    }

    dp[i] = max;
  }

  return Math.max(...dp);
};

console.log(longestStrChain(["a", "b", "ba", "bca", "bda", "bdca"]));

/*

An alphabetical continuous string is a string consisting of consecutive letters in the alphabet. In other words, it is any substring of the string "abcdefghijklmnopqrstuvwxyz".

For example, "abc" is an alphabetical continuous string, while "acb" and "za" are not.
Given a string s consisting of lowercase letters only, return the length of the longest alphabetical continuous substring.

Input: s = "abacaba"
Output: 2
Explanation: There are 4 distinct continuous substrings: "a", "b", "c" and "ab".
"ab" is the longest continuous substring.

Input: s = "abcde"
Output: 5
Explanation: "abcde" is the longest continuous substring.

*/

export const longestContinuousSubstring = (s: string) => {
  let maxLen = 0;
  let count = 1;

  for (let i = 1; i < s.length; i++) {
    if (maxLen === 26) break;

    if (s[i].charCodeAt(0) - s[i - 1].charCodeAt(0) === 1) count++;
    else {
      maxLen = Math.max(maxLen, count);
      count = 1;
    }
  }

  return Math.max(maxLen, count);
};

console.log(longestContinuousSubstring("abcde"));

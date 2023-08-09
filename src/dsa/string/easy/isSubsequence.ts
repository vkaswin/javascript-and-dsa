/*

Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
A subsequence of a string is a new string that is formed from the original string by 
deleting some (can be none) of the characters without disturbing the relative positions of the
remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

Input: s = "abc", t = "ahbgdc"
Output: true

*/

export const isSubsequence = (s: string, t: string) => {
  let i = 0;

  for (let char of t) {
    if (i === s.length) return true;
    if (char === s[i]) i++;
  }

  return i === s.length;
};

console.log(isSubsequence("abc", "ahbgdc"));

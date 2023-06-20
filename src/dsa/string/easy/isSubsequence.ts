/*

Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
A subsequence of a string is a new string that is formed from the original string by 
deleting some (can be none) of the characters without disturbing the relative positions of the
remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

Input: s = "abc", t = "ahbgdc"
Output: true

*/

export const isSubsequence = (s: string, t: string) => {
  let str = [...s];

  for (let i = t.length - 1; i >= 0; i--) {
    if (str[str.length - 1] === t[i]) str.pop();
  }

  return str.length === 0;
};

export const isSubsequenceAlternative = (s: string, t: string) => {
  let i = s.length - 1;

  for (let j = t.length - 1; j >= 0; j--) {
    if (s[i] === t[j]) i--;
  }

  return i === -1;
};

console.log(isSubsequence("abc", "ahbgdc"));

/*

Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.

Input: s = "abcabcabcabc"
Output: true
Explanation: It is the substring "abc" four times or the substring "abcabc" twice.

*/

export const repeatedSubstringPattern = (s: string) => {
  return s.repeat(2).slice(1, -1).includes(s);
};

console.log(repeatedSubstringPattern("aba"));

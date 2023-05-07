/*

Given a string s consisting of words and spaces, return the length of the last word in the string.
A word is a maximal substring consisting of non-space characters only.

Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.

*/

const lengthOfLastWord = function (s: string) {
  s = s.trimEnd();
  let len = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] == " ") break;
    len++;
  }
  return len;
};

console.log(lengthOfLastWord("   fly me   to   the moon  "));

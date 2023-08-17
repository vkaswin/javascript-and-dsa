/*

Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".

*/

export const backspaceCompare = (s: string, t: string) => {
  let str1: string[] = [];
  let str2: string[] = [];

  for (let char of s) {
    if (char === "#") str1.pop();
    else str1.push(char);
  }

  for (let char of t) {
    if (char === "#") str2.pop();
    else str2.push(char);
  }

  return str1.join("") === str2.join("");
};

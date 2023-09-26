/*

Given a string s, remove duplicate letters so that every letter appears once and only once. You must make sure your result is 
the smallest in lexicographical order among all possible results.

Input: s = "cbacdcbc"
Output: "acdb"

*/

export const removeDuplicateLetters = (s: string) => {
  let set = new Set();
  let str = "";

  for (let char of s) {
    if (set.has(char)) continue;
    set.add(char);
    str += char;
  }

  console.log([...new Set(s)].sort().join(""), str);
};

console.log(removeDuplicateLetters("cbacdcbc"));

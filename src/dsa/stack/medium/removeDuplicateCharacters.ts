/*

Given a string s, remove duplicate letters so that every letter appears once and only once. You must make sure your result is 
the smallest in lexicographical order among all possible results.

Input: s = "cbacdcbc"
Output: "acdb"

*/

export const removeDuplicateLetters = (s: string) => {
  let stack: string[] = [];
  let occurances: Record<string, number> = {};
  let visited = new Set();

  for (let i = 0; i < s.length; i++) {
    occurances[s[i]] = i;
  }

  for (let i = 0; i < s.length; i++) {
    if (visited.has(s[i])) continue;

    while (
      stack.length &&
      s[i] < stack.at(-1)! &&
      occurances[stack.at(-1)!] > i
    ) {
      visited.delete(stack.pop());
    }

    visited.add(s[i]);
    stack.push(s[i]);
  }

  return stack.join("");
};

console.log(removeDuplicateLetters("cbacdcbc"));

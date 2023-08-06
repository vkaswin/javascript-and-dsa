/*

You are given a string s consisting of lowercase English letters. A duplicate removal consists of choosing two adjacent and equal letters and removing them.

We repeatedly make duplicate removals on s until we no longer can.

Return the final string after all such duplicate removals have been made. It can be proven that the answer is unique.

Input: s = "abbaca"
Output: "ca"
Explanation: 
For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.  The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".

*/

export const removeDuplicates = (s: string) => {
  if (s.length <= 1) return s;

  let stack: string[] = [];

  for (let char of s) {
    if (stack[stack.length - 1] === char) stack.pop();
    else stack.push(char);
  }

  return stack.join("");
};

console.log();

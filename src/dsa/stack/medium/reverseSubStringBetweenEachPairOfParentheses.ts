/*

You are given a string s that consists of lower case English letters and brackets.

Reverse the strings in each pair of matching parentheses, starting from the innermost one.

Your result should not contain any brackets.

Input: s = "(ed(et(oc))el)"
Output: "leetcode"
Explanation: First, we reverse the substring "oc", then "etco", and finally, the whole string.

*/

export const reverseParentheses = (s: string) => {
  let stack: string[] = [];

  for (let char of s) {
    if (char === ")") {
      let str = "";
      while (stack.at(-1) !== "(") str += stack.pop();
      stack.pop();
      stack.push(...str);
    } else {
      stack.push(char);
    }
  }

  return stack.join("");
};

console.log(reverseParentheses("(ed(et(oc))el)"));

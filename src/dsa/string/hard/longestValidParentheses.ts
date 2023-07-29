/*

Given a string containing just the characters '(' and ')', return the length of the longest valid (well-formed) parentheses 
substring

Input: s = ")()())"
Output: 4
Explanation: The longest valid parentheses substring is "()()".

*/

export const longestValidParentheses = (s: string) => {
  let stack: string[] = [];
  let count = 0;
  let temp = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ")" && stack[stack.length - 1] === "(") {
      stack.pop();
      temp += 2;

      if (stack.length === 0) {
        count += temp;
        temp = 0;
      }
    } else {
      stack.push(s[i]);
    }
  }

  return count;
};
console.log(longestValidParentheses("()(()"));
console.log(longestValidParentheses("()(())"));
console.log(longestValidParentheses(")()())"));

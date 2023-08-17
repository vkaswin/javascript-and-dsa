/*

Given a string containing just the characters '(' and ')', return the length of the longest valid (well-formed) parentheses 
substring

Input: s = ")()())"
Output: 4
Explanation: The longest valid parentheses substring is "()()".

*/

export const longestValidParentheses = (s: string) => {
  let stack: number[] = [-1];
  let maxLen = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(i);
    } else {
      stack.pop();
      if (stack.length > 0)
        maxLen = Math.max(maxLen, i - stack[stack.length - 1]);
      else stack.push(i);
    }
  }

  return maxLen;
};
console.log(longestValidParentheses("()(()))))"));

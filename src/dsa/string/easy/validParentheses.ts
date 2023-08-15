/*

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
determine if the input string is valid.
An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

Input: s = "()[]{}"
Output: true

Input: s = "{[]}"
Output: true

*/

export const isValid = (s: string) => {
  if (s.length % 2 !== 0) return false;

  let stack: string[] = [];

  for (let char of s) {
    if (char === "[") stack.push("]");
    else if (char === "{") stack.push("}");
    else if (char === "(") stack.push(")");
    else if (char !== stack.pop()) return false;
  }

  return stack.length === 0;
};

console.log(isValid("({}()())[]{}"));

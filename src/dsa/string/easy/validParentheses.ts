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
  let stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case "(":
        stack.push(")");
        break;
      case "[":
        stack.push("]");
        break;
      case "{":
        stack.push("}");
        break;
      default:
        if (s[i] !== stack.pop()) return false;
    }
  }

  return stack.length === 0;
};

console.log(isValid("({}()())[]{}"));

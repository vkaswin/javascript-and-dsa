/*

Given a string s which represents an expression, evaluate this expression and return its value. 

The integer division should truncate toward zero.

You may assume that the given expression is always valid. All intermediate results will be in the range of [-231, 231 - 1].

Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().

Input: s = "3+2*2"
Output: 7

*/

export const calculate = (s: string): number => {
  let stack: number[] = [];
  let set = new Set("0123456789");
  let num = "";
  let sign = "+";

  for (let i = 0; i <= s.length; i++) {
    if (s[i] === " ") continue;

    if (set.has(s[i])) {
      num += s[i];
    } else {
      let val = +num;
      if (sign === "+") {
        stack.push(val);
      } else if (sign === "-") {
        stack.push(-val);
      } else if (sign === "*") {
        stack.push((stack.pop() as number) * val);
      } else if (sign === "/") {
        stack.push(Math.trunc((stack.pop() as number) / val));
      }
      sign = s[i];
      num = "";
    }
  }

  return stack.reduce((acc, curr) => acc + curr);
};

console.log(calculate("32"));

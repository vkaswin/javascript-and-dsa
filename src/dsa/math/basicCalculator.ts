/*

Given a string s representing a valid expression, implement a basic calculator to evaluate it, and return the result of the evaluation.

Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().

Input: s = "(1+(4+5+2)-3)+(6+8)"
Output: 23

*/

export const calculate = (s: string) => {
  let stack: number[] = [];
  let set = new Set("0123456789");
  let sign = 1;
  let sum = 0;
  let i = 0;

  for (i; i < s.length; i++) {
    if (s[i] === " ") continue;

    if (set.has(s[i])) {
      let num = "";

      while (i < s.length && set.has(s[i])) {
        num += s[i];
        i++;
      }

      sum += +num * sign;
      i--;
    } else if (s[i] === "+") {
      sign = 1;
    } else if (s[i] === "-") {
      sign = -1;
    } else if (s[i] === "(") {
      stack.push(sum);
      stack.push(sign);
      sum = 0;
      sign = 1;
    } else if (s[i] === ")") {
      sum *= stack.pop() as number;
      sum += stack.pop() as number;
    }
  }

  return sum;
};

console.log(calculate("(1+(4+5+2)-3)+(6+8)"));

/*

You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.

Evaluate the expression. Return an integer that represents the value of the expression.

Note that:

The valid operators are '+', '-', '*', and '/'.
Each operand may be an integer or another expression.
The division between two integers always truncates toward zero.
There will not be any division by zero.
The input represents a valid arithmetic expression in a reverse polish notation.
The answer and all the intermediate calculations can be represented in a 32-bit integer.

Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
Output: 22
Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22

*/

export const evalRPN = (tokens: string[]) => {
  let stack: number[] = [];
  let operators = new Set("+-*/");

  for (let token of tokens) {
    if (!operators.has(token)) {
      stack.push(+token);
      continue;
    }

    let num1 = +stack.pop()!;
    let num2 = +stack.pop()!;

    if (token === "+") num2 += num1;
    else if (token === "-") num2 -= num1;
    else if (token === "*") num2 *= num1;
    else num2 /= num1;
    stack.push(Math.trunc(num2));
  }

  return stack[0];
};

console.log(
  evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])
);

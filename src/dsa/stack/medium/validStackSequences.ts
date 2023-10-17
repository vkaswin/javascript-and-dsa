/*

Given two integer arrays pushed and popped each with distinct values, return true if this could have been the result of a sequence of push and pop operations on an initially empty stack, or false otherwise.

Input: pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
Output: true
Explanation: We might do the following sequence:
push(1), push(2), push(3), push(4),
pop() -> 4,
push(5),
pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1

*/

export const validateStackSequences = (pushed: number[], popped: number[]) => {
  let stack: number[] = [];
  let n = pushed.length;
  let i = 0;
  let j = 0;

  while (i < n || j < n) {
    if (stack.length && j < n && stack.at(-1) === popped[j]) {
      stack.pop();
      j++;
    } else if (i < n) {
      stack.push(pushed[i++]);
    } else {
      return false;
    }
  }

  return stack.length === 0;
};

console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 3, 5, 1, 2]));

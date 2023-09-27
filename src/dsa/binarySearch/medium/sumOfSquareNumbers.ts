/*

Given a non-negative integer c, decide whether there're two integers a and b such that a2 + b2 = c.

Input: c = 5
Output: true
Explanation: 1 * 1 + 2 * 2 = 5

*/

export const judgeSquareSum = (c: number) => {
  let left = 0;
  let right = Math.ceil(Math.sqrt(c));

  while (left <= right) {
    let sum = left * left + right * right;

    if (sum === c) return true;

    if (sum > c) right--;
    else left++;
  }

  return false;
};

console.log(judgeSquareSum(5));

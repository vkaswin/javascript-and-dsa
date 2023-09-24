/*

Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.

Input: n = 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1

*/

export const isHappy = (n: number) => {
  let set = new Set<number>();

  let findSum = (n: number): number => {
    if (n < 10) return Math.pow(n, 2);
    return Math.pow(n % 10, 2) + findSum(Math.floor(n / 10));
  };

  let checkIsHappy = (n: number) => {
    let sum = findSum(n);

    if (set.has(sum)) return false;

    if (sum === 1) return true;

    set.add(sum);

    return checkIsHappy(sum);
  };

  return checkIsHappy(n);
};

console.log(isHappy(19));

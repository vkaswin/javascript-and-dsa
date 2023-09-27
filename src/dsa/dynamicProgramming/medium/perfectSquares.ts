/*

Given an integer n, return the least number of perfect square numbers that sum to n.

A perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself. For example, 1, 4, 9, and 16 are perfect squares while 3 and 11 are not.

Input: n = 12
Output: 3
Explanation: 12 = 4 + 4 + 4.

*/

export const numSquares = (n: number) => {
  const nums: number[] = [];

  for (let i = 1; i * i <= n; i++) {
    nums.push(i * i);
  }

  let dp = new Array(n + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= n; i++) {
    for (let num of nums) {
      if (num > i) continue;
      dp[i] = Math.min(dp[i], 1 + dp[i - num]);
    }
  }

  return dp.at(-1);
};

console.log(numSquares(12));

/*

Given an integer n, break it into the sum of k positive integers, where k >= 2, and maximize the product of those integers.

Return the maximum product you can get.

Input: n = 10
Output: 36
Explanation: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36.

*/

export const integerBreak = (n: number) => {
  let dp = new Array(n);
  let len = Math.ceil(n / 2);

  let dfs = (n: number) => {
    if (n <= 0) return Number(n === 0);

    if (dp[n] !== undefined) return dp[n];

    let max = 1;

    for (let i = 1; i <= len; i++) {
      max = Math.max(max, i * dfs(n - i));
    }

    return (dp[n] = max);
  };

  return dfs(n);
};

console.log(integerBreak(10));

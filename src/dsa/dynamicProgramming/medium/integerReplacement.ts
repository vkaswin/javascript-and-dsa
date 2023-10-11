/*

Given a positive integer n, you can apply one of the following operations:

If n is even, replace n with n / 2.
If n is odd, replace n with either n + 1 or n - 1.
Return the minimum number of operations needed for n to become 1.

Input: n = 7
Output: 4
Explanation: 7 -> 8 -> 4 -> 2 -> 1
or 7 -> 6 -> 3 -> 2 -> 1

*/

export const integerReplacement = (n: number) => {
  let dp: number[] = [];

  let dfs = (n: number): number => {
    if (n === 1) return 0;

    if (n < 1) return Infinity;

    if (dp[n] !== undefined) return dp[n];

    let isEven = n % 2 === 0;

    if (isEven) return 1 + dfs(n / 2);

    return 1 + Math.min(dfs(n + 1), dfs(n - 1));
  };

  return dfs(n);
};

console.log(integerReplacement(8));

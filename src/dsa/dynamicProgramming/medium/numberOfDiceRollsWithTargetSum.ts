/*

You have n dice, and each die has k faces numbered from 1 to k.

Given three integers n, k, and target, return the number of possible ways (out of the kn total ways) to roll the dice, so the sum of the face-up numbers equals target. Since the answer may be too large, return it modulo 109 + 7.

Input: n = 2, k = 6, target = 7
Output: 6
Explanation: You throw two dice, each with 6 faces.
There are 6 ways to get a sum of 7: 1+6, 2+5, 3+4, 4+3, 5+2, 6+1.

*/

export const numRollsToTarget = (n: number, k: number, target: number) => {
  let cache: Record<string, number> = {};
  let mod = Math.pow(10, 9) + 7;

  let dfs = (dice: number, sum: number) => {
    if (dice === n) return Number(sum === 0);

    if (sum < 0) return 0;

    let key = `${dice},${sum}`;

    if (key in cache) return cache[key];

    let count = 0;

    for (let i = 1; i <= k; i++) {
      count += dfs(dice + 1, sum - i);
    }

    return (cache[key] = count % mod);
  };

  return dfs(0, target);
};

console.log(numRollsToTarget(30, 30, 500));

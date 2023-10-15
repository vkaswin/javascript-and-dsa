/*

You have a pointer at index 0 in an array of size arrLen. At each step, you can move 1 position to the left, 1 position to the right in the array, or stay in the same place (The pointer should not be placed outside the array at any time).

Given two integers steps and arrLen, return the number of ways such that your pointer is still at index 0 after exactly steps steps. Since the answer may be too large, return it modulo 109 + 7.

Input: steps = 3, arrLen = 2
Output: 4
Explanation: There are 4 differents ways to stay at index 0 after 3 steps.
Right, Left, Stay
Stay, Right, Left
Right, Stay, Left
Stay, Stay, Stay

*/

export const numWays = (steps: number, arrLen: number) => {
  let mod = Math.pow(10, 9) + 7;
  let dp = new Array(steps).fill(0).map(() => new Array(steps));

  let dfs = (index: number, k: number): number => {
    if (index < 0 || index >= arrLen) return 0;

    if (k === steps) return Number(index === 0);

    if (dp[index][k] !== undefined) return dp[index][k];

    let left = dfs(index - 1, k + 1);
    let right = dfs(index + 1, k + 1);
    let stay = dfs(index, k + 1);

    return (dp[index][k] = (left + right + stay) % mod);
  };

  return dfs(0, 0) % mod;
};

console.log(numWays(3, 2));

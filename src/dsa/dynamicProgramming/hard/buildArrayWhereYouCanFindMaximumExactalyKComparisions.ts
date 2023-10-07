/*

You are given three integers n, m and k. Consider the following algorithm to find the maximum element of an array of positive integers:

You should build the array arr which has the following properties:

arr has exactly n integers.
1 <= arr[i] <= m where (0 <= i < n).
After applying the mentioned algorithm to arr, the value search_cost is equal to k.
Return the number of ways to build the array arr under the mentioned conditions. As the answer may grow large, the answer must be computed modulo 109 + 7.

Input: n = 2, m = 3, k = 1
Output: 6
Explanation: The possible arrays are [1, 1], [2, 1], [2, 2], [3, 1], [3, 2] [3, 3]

*/

export const numOfArrays = (n: number, m: number, k: number) => {
  let count = 0;

  let dp: Record<string, number>[][] = [];

  for (let i = 0; i <= n; i++) {
    dp[i] = [];
    for (let j = 0; j <= n; j++) {
      dp[i][j] = {};
    }
  }

  if (m < k) return count;

  let mod = Math.pow(10, 9) + 7;

  let dfs = (cost: number, len: number, currMax: number) => {
    if (cost > k) return 0;

    if (len >= n) return Number(cost === k);

    if (currMax in dp[len][cost]) return dp[len][cost][currMax];

    let count = 0;

    for (let i = 1; i <= m; i++) {
      count += dfs(
        i > currMax ? cost + 1 : cost,
        len + 1,
        i > currMax ? i : currMax
      );
    }

    return (dp[len][cost][currMax] = count % mod);
  };

  return dfs(0, 0, -1);
};

console.log(numOfArrays(50, 100, 25)); // 34549172

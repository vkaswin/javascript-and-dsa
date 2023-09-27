/*

You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1

*/

export const coinChange = (coins: number[], amount: number) => {
  let dp: number[] = [];

  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    dp[i] = Infinity;

    for (let coin of coins) {
      if (coin > i) continue;
      dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
};

export const coinChangeTopDown = (coins: number[], amount: number) => {
  let dp = new Array(amount + 1).fill(0).map(() => new Array(coins.length + 1));

  let dfs = (target: number, index: number) => {
    if (target === 0) return 0;

    if (target < 0 || index >= coins.length) return Infinity;

    if (dp[target][index] !== undefined) return dp[target][index];

    let min = Infinity;

    for (let i = index; i < coins.length; i++) {
      if (coins[i] > target) continue;
      min = Math.min(min, 1 + dfs(target - coins[i], i));
    }

    return (dp[target][index] = min);
  };

  let res = dfs(amount, 0);
  return res === Infinity ? -1 : res;
};

console.log(coinChange([1, 5, 2], 11));

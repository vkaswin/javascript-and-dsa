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

console.log(coinChange([1, 5, 2], 11));

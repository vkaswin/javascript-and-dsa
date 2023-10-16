/*

You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the number of combinations that make up that amount. If that amount of money cannot be made up by any combination of the coins, return 0.

You may assume that you have an infinite number of each kind of coin.

The answer is guaranteed to fit into a signed 32-bit integer.

Input: amount = 5, coins = [1,2,5]
Output: 4
Explanation: there are four ways to make up the amount:
5=5
5=2+2+1
5=2+1+1+1
5=1+1+1+1+1

*/

export const change = (amount: number, coins: number[]) => {
  let dp = new Array(amount + 1).fill(0).map(() => new Array(coins.length));

  let dfs = (amount: number, index: number) => {
    if (amount === 0) return 1;

    if (dp[amount][index] !== undefined) return dp[amount][index];

    let count = 0;

    for (let i = index; i < coins.length; i++) {
      if (coins[i] > amount) continue;
      count += dfs(amount - coins[i], i);
    }

    return (dp[amount][index] = count);
  };

  return dfs(amount, 0);
};

console.log(change(5, [1, 2, 5]));

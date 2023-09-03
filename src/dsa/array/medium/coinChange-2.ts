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
  let cache: Record<string, number> = {};

  let dfs = (index: number, target: number): number => {
    if (target < 0) return 0;

    let key = index + "," + target;

    if (key in cache) return cache[key];

    if (target === 0) return 1;

    let count = 0;

    for (let i = index; i < coins.length; i++) {
      if (coins[i] > target) continue;

      count += dfs(i, target - coins[i]);
    }

    cache[key] = count;

    return count;
  };

  return dfs(0, amount);
};

console.log(change(5, [1, 2, 5]));

/*

You are given two positive integers startPos and endPos. Initially, you are standing at position startPos on an infinite number line. With one step, you can move either one position to the left, or one position to the right.

Given a positive integer k, return the number of different ways to reach the position endPos starting from startPos, such that you perform exactly k steps. Since the answer may be very large, return it modulo 109 + 7.

Two ways are considered different if the order of the steps made is not exactly the same.

Note that the number line includes negative integers.

Input: startPos = 1, endPos = 2, k = 3
Output: 3
Explanation: We can reach position 2 from 1 in exactly 3 steps in three ways:
- 1 -> 2 -> 3 -> 2.
- 1 -> 2 -> 1 -> 2.
- 1 -> 0 -> 1 -> 2.
It can be proven that no other way is possible, so we return 3.

*/

function numberOfWays(startPos: number, endPos: number, k: number): number {
  let mod = Math.pow(10, 9) + 7;
  let cache: Record<string, number> = {};

  let dfs = (position: number, k: number) => {
    let key = `${position},${k}`;

    if (key in cache) return cache[key];

    if (k === 0) return Number(position === endPos);

    cache[key] = (dfs(position + 1, k - 1) + dfs(position - 1, k - 1)) % mod;

    return cache[key];
  };

  return dfs(startPos, k);
}

console.log(numberOfWays(1, 2, 3));

/*

There are n piles of stones arranged in a row. The ith pile has stones[i] stones.

A move consists of merging exactly k consecutive piles into one pile, and the cost of this move is equal to the total number of stones in these k piles.

Return the minimum cost to merge all piles of stones into one pile. If it is impossible, return -1.

Input: stones = [3,2,4,1], k = 2
Output: 20
Explanation: We start with [3, 2, 4, 1].
We merge [3, 2] for a cost of 5, and we are left with [5, 4, 1].
We merge [4, 1] for a cost of 5, and we are left with [5, 5].
We merge [5, 5] for a cost of 10, and we are left with [10].
The total cost was 20, and this is the minimum possible.

*/

export const mergeStones = (stones: number[], k: number) => {
  if (stones.length === 1 && k > stones.length) return 0;

  let cache: Record<string, number> = {};

  let dfs = (start: number, end: number, stones: number[]) => {
    if (stones.length < k) return Infinity;

    if (stones.length === 1) return stones[0];

    if (stones.length === k) return stones.reduce((acc, curr) => acc + curr, 0);

    let key = `${start},${end},${stones.length}`;

    if (key in cache) return cache[key];

    let minCost = Infinity;

    for (let i = 0; i <= stones.length - k; i++) {
      let sum = 0;
      let j = i;
      let n = 0;

      while (n < k) {
        sum += stones[j];
        j++;
        n++;
      }

      let merged = [...stones];
      merged.splice(i, k);
      merged.splice(i, 0, sum);

      minCost = Math.min(minCost, sum + dfs(i, j - 1, merged));
    }

    return (cache[key] = minCost);
  };

  let res = dfs(0, 0, stones);

  return res === Infinity ? -1 : res;
};

console.log(
  mergeStones(
    [
      95, 54, 31, 48, 44, 96, 99, 20, 51, 54, 18, 85, 25, 84, 91, 48, 40, 72,
      22,
    ],
    2
  )
);

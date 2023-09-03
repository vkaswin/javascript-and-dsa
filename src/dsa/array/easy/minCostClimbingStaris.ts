const minCostClimbingStairsTopDown = (cost: number[]) => {
  let cache: Record<number, number> = {};

  let recurse = (index: number) => {
    if (index >= cost.length) return 0;

    if (index in cache) return cache[index];

    cache[index] = Infinity;

    cache[index] = Math.min(
      cache[index],
      (cost[index + 1] || 0) + recurse(index + 1),
      (cost[index + 2] || 0) + recurse(index + 2)
    );

    return cache[index];
  };

  return recurse(-1);
};

const minCostClimbingStairs = (cost: number[]) => {
  for (let i = 2; i < cost.length; i++) {
    cost[i] = Math.min(cost[i - 2] + cost[i], cost[i - 1] + cost[i]);
  }

  return Math.min(cost[cost.length - 1], cost[cost.length - 2]);
};

console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));

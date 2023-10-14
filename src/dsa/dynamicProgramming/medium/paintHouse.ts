/*
There are a row of n houses, each house can be painted with one of the three colors: red, blue or green. The cost of painting each house with a certain color is different. You have to paint all the houses such that no two adjacent houses have the same color, and you need to cost the least. Return the minimum cost.

The cost of painting each house with a certain color is represented by a n x 3 cost matrix. For example, costs[0][0] is the cost of painting house 0 with color red; costs[1][2] is the cost of painting house 1 with color green, and so on... Find the minimum cost to paint all houses.

Input: [[14,2,11],[11,14,5],[14,3,10]]
Output: 10
Explanation: Paint house 0 into blue, paint house 1 into green, paint house 2 into blue. Minimum cost: 2 + 5 + 3 = 10.

*/

export const minCost = (costs: number[][]) => {
  if (!costs.length) return 0;

  let dp: number[][] = new Array(costs.length).fill(0).map(() => new Array(3));

  dp[0][0] = costs[0][0];
  dp[0][1] = costs[0][1];
  dp[0][2] = costs[0][2];

  for (let i = 1; i < costs.length; i++) {
    dp[i][0] = costs[i][0] + Math.min(dp[i - 1][1], dp[i - 1][2]);
    dp[i][1] = costs[i][1] + Math.min(dp[i - 1][0], dp[i - 1][2]);
    dp[i][2] = costs[i][2] + Math.min(dp[i - 1][0], dp[i - 1][1]);
  }

  return Math.min(...dp[dp.length - 1]);
};

console.log(
  minCost([
    [14, 2, 11],
    [11, 14, 5],
    [14, 3, 10],
  ])
);

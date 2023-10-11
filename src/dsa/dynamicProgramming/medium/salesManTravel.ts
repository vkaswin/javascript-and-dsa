/*

A salesman travel between two cities A and B to sell its product. On a particular day, he can either choose to sell the product or travel to other city. He cannot travel and sell on same day.
We need to print the schedule of salesman for maximum profit earned.

For example:
Cost of selling product in city A: A = [23, 4, 5, 20]
Cost of selling product in city B: B = [21, 1, 10 100]

So max profit he can earn is by:
Day1: Sell in City A (A)
Day2: Travel to City B (T)
Day3: Sell in City B (B)
Day4: Sell in City B (B)

Hence the answer should be "ATBB"

*/

export const maxProfit = (A: number[], B: number[]) => {
  let dp = new Array(A.length).fill(0).map(() => new Array(2));

  let dfs = (i: number, cityA: number): [number, string] => {
    if (i >= A.length) return [0, ""];

    if (dp[i][cityA] !== undefined) return dp[i][cityA];

    let travel = dfs(i + 1, Number(!cityA));
    let sell = dfs(i + 1, cityA);

    let sellCost = sell[0] + (cityA ? A[i] : B[i]);

    if (travel[0] > sellCost) {
      dp[i][cityA] = [travel[0], "T" + travel[1]];
    } else {
      dp[i][cityA] = [sellCost, (cityA ? "A" : "B") + sell[1]];
    }

    return dp[i][cityA];
  };

  let cityA = dfs(0, 1);
  let cityB = dfs(0, 0);

  if (cityA[0] > cityB[0]) return cityA[1];

  return cityB[1];
};

console.log(maxProfit([23, 4, 5, 20], [21, 1, 10, 100]));

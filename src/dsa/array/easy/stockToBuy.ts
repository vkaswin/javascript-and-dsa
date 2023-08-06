/* You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction

Input: prices = [7,1,5,3,6,4]

Output: 5 */

export const maxProfit = (prices: number[]) => {
  let min = prices[0];
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    profit = Math.max(profit, prices[i] - min);
  }

  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));

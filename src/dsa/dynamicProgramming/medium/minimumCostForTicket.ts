/*

You have planned some train traveling one year in advance. The days of the year in which you will travel are given as an integer array days. Each day is an integer from 1 to 365.

Train tickets are sold in three different ways:

a 1-day pass is sold for costs[0] dollars,
a 7-day pass is sold for costs[1] dollars, and
a 30-day pass is sold for costs[2] dollars.
The passes allow that many days of consecutive travel.

For example, if we get a 7-day pass on day 2, then we can travel for 7 days: 2, 3, 4, 5, 6, 7, and 8.
Return the minimum number of dollars you need to travel every day in the given list of days.

*/

export const mincostTickets = (days: number[], costs: number[]) => {
  let cache: Record<number, number> = {};
  let pass = [1, 7, 30];

  let dfs = (index: number) => {
    if (index >= days.length) return 0;

    if (index in cache) return cache[index];

    cache[index] = Infinity;

    for (let i = 0; i < pass.length; i++) {
      let totalDays = days[index] + pass[i];
      let j = index + 1;

      while (j < days.length && days[j] < totalDays) j++;

      cache[index] = Math.min(cache[index], costs[i] + dfs(j));
    }

    return cache[index];
  };

  return dfs(0);
};

console.log(mincostTickets([1, 4, 6, 7, 8, 20], [2, 7, 15]));

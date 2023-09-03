/*

There are n oranges in the kitchen and you decided to eat some of these oranges every day as follows:

Eat one orange.
If the number of remaining oranges n is divisible by 2 then you can eat n / 2 oranges.
If the number of remaining oranges n is divisible by 3 then you can eat 2 * (n / 3) oranges.
You can only choose one of the actions per day.

Given the integer n, return the minimum number of days to eat n oranges.

Input: n = 10
Output: 4
Explanation: You have 10 oranges.
Day 1: Eat 1 orange,  10 - 1 = 9.  
Day 2: Eat 6 oranges, 9 - 2*(9/3) = 9 - 6 = 3. (Since 9 is divisible by 3)
Day 3: Eat 2 oranges, 3 - 2*(3/3) = 3 - 2 = 1. 
Day 4: Eat the last orange  1 - 1  = 0.
You need at least 4 days to eat the 10 oranges.

*/

export const minDays = (n: number) => {
  let cache: Record<number, number> = {};

  let dfs = (n: number) => {
    if (n <= 0) return 0;

    if (n in cache) return cache[n];

    if (n % 3 === 0 || (n - 1) % 3 === 0) {
      if (n % 3 === 0) cache[n] = 1 + dfs(n - 2 * (n / 3));
      else if ((n - 1) % 3 === 0) cache[n] = 2 + dfs(n - 1 - 2 * ((n - 1) / 3));
    } else if (n % 2 === 0 || (n - 1) % 2 === 0) {
      if (n % 2 === 0) cache[n] = 1 + dfs(n - n / 2);
      else if ((n - 1) % 3 === 0) cache[n] = 2 + dfs(n - 1 - (n - 1) / 2);
    }

    return cache[n];
  };

  return dfs(n);
};

console.log(minDays(10));

/*

You are given an integer array prices where prices[i] is the price of a given stock on the ith day. We need to find the longest possible subarray in prices which will have it’s first price greater than it’s last price.

Example 1:
Input: prices = [10, 20, 30, 40, 50, 1, 20, 9, 60]
Output = [10, 20, 30, 40, 50, 1, 20, 9]
Explanation: [10, 20, 30, 40, 50, 1, 20, 9] is the longest possible subarray of prices with the 1st element being greater than the last element.

*/

export const longestSubarray = (prices: number[]) => {
  let visited = new Set();
  let maxLen = 0;
  let left = 0;
  let right = 0;

  let recurse = (i: number, j: number) => {
    if (i >= j || j <= i) return;

    let key = `${i},${j}`;

    if (visited.has(key)) return;

    visited.add(key);

    if (prices[j] < prices[i] && j - i > maxLen) {
      maxLen = j - i;
      left = i;
      right = j;
      return;
    }

    recurse(i, j - 1);
    recurse(i + 1, j);
  };

  recurse(0, prices.length - 1);

  return maxLen !== 0 ? prices.slice(left, right + 1) : [];
};

console.log(longestSubarray([10, 20, 30, 40, 50, 1, 20, 9, 60]));

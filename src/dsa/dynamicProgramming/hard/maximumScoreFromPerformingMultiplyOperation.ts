/*

You are given two 0-indexed integer arrays nums and multipliers of size n and m respectively, where n >= m.

You begin with a score of 0. You want to perform exactly m operations. On the ith operation (0-indexed) you will:

Choose one integer x from either the start or the end of the array nums.
Add multipliers[i] * x to your score.
Note that multipliers[0] corresponds to the first operation, multipliers[1] to the second operation, and so on.
Remove x from nums.
Return the maximum score after performing m operations.

Input: nums = [1,2,3], multipliers = [3,2,1]
Output: 14
Explanation: An optimal solution is as follows:
- Choose from the end, [1,2,3], adding 3 * 3 = 9 to the score.
- Choose from the end, [1,2], adding 2 * 2 = 4 to the score.
- Choose from the end, [1], adding 1 * 1 = 1 to the score.
The total score is 9 + 4 + 1 = 14.

*/

export const maximumScore = (nums: number[], multipliers: number[]) => {
  let cache: Record<string, number> = {};

  let dfs = (left: number, right: number, index: number): number => {
    if (index >= multipliers.length) return 0;

    if (left > right) return -Infinity;

    let key = `${left},${right}`;

    if (key in cache) return cache[key];

    let includeStart =
      nums[left] * multipliers[index] + dfs(left + 1, right, index + 1);
    let includeEnd =
      nums[right] * multipliers[index] + dfs(left, right - 1, index + 1);

    return (cache[key] = Math.max(includeStart, includeEnd));
  };

  return dfs(0, nums.length - 1, 0);
};

console.log(maximumScore([1, 2, 3], [3, 2, 1]));

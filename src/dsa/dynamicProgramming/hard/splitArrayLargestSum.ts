/*

Given an integer array nums and an integer k, split nums into k non-empty subarrays such that the largest sum of any subarray is minimized.

Return the minimized largest sum of the split.

A subarray is a contiguous part of the array.

Input: nums = [7,2,5,10,8], k = 2
Output: 18
Explanation: There are four ways to split nums into two subarrays.
The best way is to split it into [7,2,5] and [10,8], where the largest sum among the two subarrays is only 18.

*/

export const splitArray = (nums: number[], k: number) => {
  let dp = new Array(nums.length).fill(0).map(() => new Array(k));

  let dfs = (index: number, split: number) => {
    if (split === k) return index >= nums.length ? 0 : Infinity;

    if (index >= nums.length) return Infinity;

    if (dp[index][split] !== undefined) return dp[index][split];

    let currSum = 0;
    let minSum = Infinity;

    for (let i = index; i < nums.length; i++) {
      currSum += nums[i];
      minSum = Math.min(minSum, Math.max(currSum, dfs(i + 1, split + 1)));
    }

    return (dp[index][split] = minSum);
  };

  return dfs(0, 0);
};

console.log(splitArray([7, 2, 5, 10, 8], 2));

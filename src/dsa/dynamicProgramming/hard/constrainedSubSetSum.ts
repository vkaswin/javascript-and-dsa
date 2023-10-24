/*

Given an integer array nums and an integer k, return the maximum sum of a non-empty subsequence of that array such that for every two consecutive integers in the subsequence, nums[i] and nums[j], where i < j, the condition j - i <= k is satisfied.

A subsequence of an array is obtained by deleting some number of elements (can be zero) from the array, leaving the remaining elements in their original order.

Input: nums = [10,2,-10,5,20], k = 2
Output: 37
Explanation: The subsequence is [10, 2, 5, 20].

*/

export const constrainedSubsetSum = (nums: number[], k: number) => {
  let dp = new Array(nums.length).fill(0).map(() => new Array(nums.length));
  let max = -Infinity;

  let dfs = (index: number, prevIndex: number): number => {
    if (index - prevIndex > k) return -Infinity;

    if (index >= nums.length) return 0;

    if (dp[index][prevIndex] !== undefined) return dp[index][prevIndex];

    let include = dfs(index + 1, index);
    let exclude = dfs(index + 1, prevIndex);

    let currMax = Math.max(nums[index], nums[index] + include, exclude);

    max = Math.max(max, currMax);

    return (dp[index][prevIndex] = currMax);
  };

  dfs(0, 0);

  return max;
};

console.log(
  constrainedSubsetSum(
    [-8269, 3217, -4023, -4138, -683, 6455, -3621, 9242, 4015, -3790],
    1
  )
);

/*

Given an integer array nums, return the length of the longest strictly increasing 
subsequence.

Input: nums = [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

*/

export const lengthOfLIS = (nums: number[]) => {
  let dp: number[] = [];

  for (let i = nums.length - 1; i >= 0; i--) {
    let max = 1;

    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] <= nums[i]) continue;
      max = Math.max(max, 1 + dp[j]);
    }

    dp[i] = max;
  }

  return Math.max(...dp);
};

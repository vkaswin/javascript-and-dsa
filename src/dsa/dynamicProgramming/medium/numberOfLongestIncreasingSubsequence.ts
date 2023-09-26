/*

Given an integer array nums, return the number of longest increasing subsequences.

Notice that the sequence has to be strictly increasing

Input: nums = [1,3,5,4,7]
Output: 2
Explanation: The two longest increasing subsequences are [1, 3, 4, 7] and [1, 3, 5, 7].

*/

export const findNumberOfLIS = (nums: number[]) => {
  let dp = [];
  let count = new Array(nums.length).fill(1);

  for (let i = nums.length - 1; i >= 0; i--) {
    let max = 1;

    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] <= nums[i]) continue;

      max = Math.max(max, 1 + dp[j]);
    }

    dp[i] = max;
  }

  console.log(dp);
};

console.log(findNumberOfLIS([1, 3, 5, 4, 7]));

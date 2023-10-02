/*

Given an integer array nums, return the number of longest increasing subsequences.

Notice that the sequence has to be strictly increasing

Input: nums = [1,3,5,4,7]
Output: 2
Explanation: The two longest increasing subsequences are [1, 3, 4, 7] and [1, 3, 5, 7].

*/

export const findNumberOfLIS = (nums: number[]) => {
  let dp: number[] = new Array(nums.length);
  let count: number[] = new Array(nums.length);

  for (let i = nums.length - 1; i >= 0; i--) {
    let max = 1;
    let total = 1;

    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] <= nums[i]) continue;

      if (1 + dp[j] > max) {
        max = 1 + dp[j];
        total = count[j];
      } else if (dp[j] + 1 === max) {
        total += count[j];
      }
    }

    dp[i] = max;
    count[i] = total;
  }

  let max = Math.max(...dp);
  let res = 0;

  for (let i = 0; i < count.length; i++) {
    if (max === dp[i]) res += count[i];
  }

  return res;
};

console.log(findNumberOfLIS([1, 3, 5, 4, 7]));

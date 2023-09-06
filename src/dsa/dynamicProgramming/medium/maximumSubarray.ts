/*

Given an integer array nums, find the 
subarray with the largest sum, and return its sum.

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.

*/

export const maxSubArray = (nums: number[]) => {
  let maxSum = nums[0];
  let sum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    sum = Math.max(nums[i], nums[i] + sum);
    maxSum = Math.max(maxSum, sum);
  }

  return maxSum;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

/*

You are given an integer array nums consisting of n elements, and an integer k.
Find a contiguous subarray whose length is equal to k that has the maximum average value and 
return this value. Any answer with a calculation error less than 10-5 will be accepted.

Input: nums = [1,12,-5,-6,50,3], k = 4
Output: 12.75000
Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75

*/

export const findMaxAverage = (nums: number[], k: number) => {
  let sum = 0;

  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }

  let maxAvg = sum / k;

  for (let i = k; i < nums.length; i++) {
    sum += nums[i] - nums[i - k];
    maxAvg = Math.max(maxAvg, sum / k);
  }

  return maxAvg;
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));

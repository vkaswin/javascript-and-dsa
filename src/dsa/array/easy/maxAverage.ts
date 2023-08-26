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
  let maxAvg = -Infinity;
  let left = 0;
  let right = 0;

  while (right < nums.length) {
    sum += nums[right++];
    if (k === right - left) {
      maxAvg = Math.max(maxAvg, sum / k);
      sum -= nums[left++];
    }
  }
  return maxAvg;
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));

/*

You are given an integer array nums and an integer k. Find the maximum subarray sum of all the subarrays of nums that meet the following conditions:

The length of the subarray is k, and
All the elements of the subarray are distinct.
Return the maximum subarray sum of all the subarrays that meet the conditions. If no subarray meets the conditions, return 0.

A subarray is a contiguous non-empty sequence of elements within an array.

Input: nums = [1,5,4,2,9,9,9], k = 3
Output: 15
Explanation: The subarrays of nums with length 3 are:
- [1,5,4] which meets the requirements and has a sum of 10.
- [5,4,2] which meets the requirements and has a sum of 11.
- [4,2,9] which meets the requirements and has a sum of 15.
- [2,9,9] which does not meet the requirements because the element 9 is repeated.
- [9,9,9] which does not meet the requirements because the element 9 is repeated.
We return 15 because it is the maximum subarray sum of all the subarrays that meet the conditions

*/

export const maximumSubarraySum = (nums: number[], k: number) => {
  let left = 0;
  let right = 0;
  let set = new Set<number>();
  let sum = 0;
  let maxSum = 0;

  while (right < nums.length) {
    while (set.has(nums[right])) {
      set.delete(nums[left]);
      sum -= nums[left];
      left++;
    }

    set.add(nums[right]);
    sum += nums[right];

    right++;

    if (right - left === k) {
      maxSum = Math.max(maxSum, sum);
      sum -= nums[left];
      set.delete(nums[left]);
      left++;
    }
  }

  return maxSum;
};

console.log(maximumSubarraySum([1, 5, 4, 2, 9, 9, 9], 3));

/*

An array is monotonic if it is either monotone increasing or monotone decreasing.
An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j].
An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].
Given an integer array nums, return true if the given array is monotonic, or false otherwise.

Input: nums = [1,2,2,3]
Output: true

*/

export const isMonotonic = (nums: number[]) => {
  if (nums.length === 0) return false;

  let increasing = true;
  let decreasing = true;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) increasing = false;
    if (nums[i] > nums[i - 1]) decreasing = false;
  }

  return increasing || decreasing;
};

console.log(isMonotonic([1, 3, 2]));

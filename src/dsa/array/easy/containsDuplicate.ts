/*

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true

Input: nums = [1,2,3,4]
Output: false

*/

export const containsDuplicate = (nums: number[]) => {
  return new Set(nums).size !== nums.length;
};

console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));

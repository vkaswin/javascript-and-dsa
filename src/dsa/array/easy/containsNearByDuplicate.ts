/*

Given an integer array nums and an integer k, return true if there are 
two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

Input: nums = [1,2,3,1], k = 3
Output: true

*/

export const containsNearbyDuplicate = (nums: number[], k: number) => {
  let obj: Record<number, number> = {};

  for (let i = 0; i < nums.length; i++) {
    if (
      obj[nums[i]] !== undefined &&
      nums[i] === nums[obj[nums[i]]] &&
      i - obj[nums[i]] <= k
    )
      return true;

    obj[nums[i]] = i;
  }

  return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));

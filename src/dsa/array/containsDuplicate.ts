/*

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true

Input: nums = [1,2,3,4]
Output: false

*/

const containsDuplicate = (nums: number[]) => {
  let hasDuplicate = false;
  let temp: Record<string, number> = {};

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (typeof temp[num] === "number") {
      hasDuplicate = true;
      break;
    } else {
      temp[num] = num;
    }
  }

  return hasDuplicate;
};

console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));

// alternate solution new Set(nums).size !== nums.length

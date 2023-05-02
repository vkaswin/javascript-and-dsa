/*

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

Input: nums = [2,2,1]
Output: 1

Input: nums = [4,1,2,1,2]
Output: 4

*/

export const singleNumber = (nums: number[]) => {
  if (nums.length === 1) return nums[0];

  let map: Record<string, number> = {};

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (typeof map[num] === "undefined") {
      map[num] = 1;
    } else {
      map[num]++;
    }
  }

  for (let num in map) {
    if (map[num] === 1) return num;
  }
};

console.log(singleNumber([4, 1, 2, 1, 2]));

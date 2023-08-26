/*

Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

Input: nums = [3,2,3]
Output: [3]

*/

export const majorityElement = (nums: number[]) => {
  let obj: Record<string, number> = {};
  let result = [];

  for (let num of nums) {
    obj[num] = (obj[num] || 0) + 1;
  }

  let max = nums.length / 3;

  for (let key in obj) {
    if (obj[key] > max) result.push(+key);
  }

  return result;
};

console.log(majorityElement([3, 2, 3]));

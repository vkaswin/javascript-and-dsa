/*

You are given an integer array nums. The unique elements of an array are the elements that appear
exactly once in the array. Return the sum of all the unique elements of nums.

Input: nums = [1,2,3,2]
Output: 4
Explanation: The unique elements are [1,3], and the sum is 4.

*/

export const sum = (nums: number[]) => {
  let total = 0;
  let obj: Record<number, number> = {};

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (obj[num]) {
      obj[num] = obj[num] + 1;
    } else {
      obj[num] = 1;
    }
  }

  for (let key in obj) {
    if (obj[key] !== 1) continue;
    total += +key;
  }

  return total;
};

console.log(sum([1, 2, 3, 2]));

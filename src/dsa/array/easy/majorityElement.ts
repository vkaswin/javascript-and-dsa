/*

Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times. 
You may assume that the majority element always exists in the array.

Input: nums = [2,2,1,1,1,2,2]
Output: 2

*/

export const majorityElement = (nums: number[]) => {
  let majority = nums[0];
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    nums[i] === majority ? count++ : count--;

    if (count === 0) {
      majority = nums[i];
      count++;
    }
  }

  return majority;
};

console.log(majorityElement([2, 2, 1, 1, 2, 2, 1, 2, 2]));

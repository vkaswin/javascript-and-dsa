/*

Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.

You must write an algorithm that runs in O(n) time and uses only constant extra space.

Input: nums = [4,3,2,7,8,2,3,1]
Output: [2,3]

*/

export const findDuplicates = (nums: number[]) => {
  let result: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    let num = Math.abs(nums[i]);
    if (nums[num - 1] > 0) nums[num - 1] *= -1;
    else result.push(num);
  }

  return result;
};

console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));

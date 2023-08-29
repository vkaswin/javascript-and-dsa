/*

Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

0 <= a, b, c, d < n
a, b, c, and d are distinct.
nums[a] + nums[b] + nums[c] + nums[d] == target
You may return the answer in any order.

Input: nums = [1,0,-1,0,-2,2], target = 0
Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

*/

export const fourSum = (nums: number[], target: number) => {
  let result: number[][] = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 3; i++) {
    for (let j = i + 1; j < nums.length - 2; j++) {
      let left = j + 1;
      let right = nums.length - 1;
      let temp = nums[i] + nums[j];

      while (left < right) {
        let sum = nums[left] + nums[right] + temp;
        if (sum === target) {
          result.push([nums[i], nums[j], nums[left], nums[right]]);
          while (nums[left] === nums[left + 1]) left++;
          left++;
        } else if (sum > target) right--;
        else left++;
      }

      while (nums[j] === nums[j + 1]) j++;
    }

    while (nums[i] === nums[i + 1]) i++;
  }
  return result;
};

console.log(fourSum([-3, -2, -1, 0, 0, 1, 2, 3], 0));

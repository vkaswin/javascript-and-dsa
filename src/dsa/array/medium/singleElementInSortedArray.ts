/*

You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.

Return the single element that appears only once.

Your solution must run in O(log n) time and O(1) space.

Input: nums = [1,1,2,3,3,4,4,8,8]
Output: 2

*/

export const singleNonDuplicate = (nums: number[]) => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (nums[middle] === nums[middle + 1]) {
      if ((right - middle + 1) % 2 === 0) right = middle - 1;
      else left = middle;
    } else if (nums[middle] === nums[middle - 1]) {
      if ((middle - left + 1) % 2 === 0) left = middle + 1;
      else right = middle;
    } else return nums[middle];
  }

  return nums[left];
};

console.log(singleNonDuplicate([1, 1, 2, 2, 3]));

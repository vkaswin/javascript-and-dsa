/*

Given a sorted array of distinct integers and a target value, return the index if the target is found. 
If not, return the index where it would be if it were inserted in order.
You must write an algorithm with O(log n) runtime complexity.

Input: nums = [1,3,5,6], target = 5
Output: 2

*/

export const searchInsert = (nums: number[], target: number) => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (nums[middle] === target) return middle;
    if (target > nums[middle]) left = middle + 1;
    else right = middle - 1;
  }

  return left;
};

console.log(searchInsert([1, 3, 5, 10], 2));

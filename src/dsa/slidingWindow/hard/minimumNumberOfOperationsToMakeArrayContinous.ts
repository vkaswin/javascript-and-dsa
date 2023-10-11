/*

You are given an integer array nums. In one operation, you can replace any element in nums with any integer.

nums is considered continuous if both of the following conditions are fulfilled:

All elements in nums are unique.
The difference between the maximum element and the minimum element in nums equals nums.length - 1.
For example, nums = [4, 2, 5, 3] is continuous, but nums = [1, 2, 3, 5, 6] is not continuous.

Return the minimum number of operations to make nums continuous.

Input: nums = [1,2,3,5,6]
Output: 1
Explanation: One possible solution is to change the last element to 4.
The resulting array is [1,2,3,5,4], which is continuous.

*/

export const minOperations = (nums: number[]) => {
  let n = nums.length;
  nums = [...new Set(nums)];
  nums.sort((a, b) => a - b);
  let min = Infinity;
  let left = 0;
  let right = 0;

  while (right < nums.length) {
    while (left < nums.length && nums[right] >= nums[left] + n) {
      left++;
    }
    right++;
    let len = n - (right - left);
    min = Math.min(min, len);
  }

  return min;
};

console.log(minOperations([1, 2, 3, 5, 6]));

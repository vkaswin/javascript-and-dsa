/*

Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

Return the sum of the three integers.

You may assume that each input would have exactly one solution.

Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

*/

function threeSumClosest(nums: number[], target: number) {
  let closest = Infinity;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];

      if (sum === target) return target;

      if (Math.abs(sum - target) < Math.abs(closest - target)) closest = sum;

      if (sum > target) right--;
      else left++;
    }
  }

  return closest;
}

console.log(threeSumClosest([1, 1, 1, 0], -100));

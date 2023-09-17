/*

You are given a 0-indexed array nums of n integers and an integer target.

You are initially positioned at index 0. In one step, you can jump from index i to any index j such that:

0 <= i < j < n
-target <= nums[j] - nums[i] <= target
Return the maximum number of jumps you can make to reach index n - 1.

If there is no way to reach index n - 1, return -1.

Input: nums = [1,3,6,4,1,2], target = 2
Output: 3
Explanation: To go from index 0 to index n - 1 with the maximum number of jumps, you can perform the following jumping sequence:
- Jump from index 0 to index 1. 
- Jump from index 1 to index 3.
- Jump from index 3 to index 5.
It can be proven that there is no other jumping sequence that goes from 0 to n - 1 with more than 3 jumps. Hence, the answer is 3. 

*/

export const maximumJumps = (nums: number[], target: number) => {
  let cache: Record<string, number> = {};

  let recurse = (index: number) => {
    if (index in cache) return cache[index];

    if (index === nums.length - 1) return 0;

    if (index >= nums.length) return -Infinity;

    let max = -Infinity;

    for (let i = index + 1; i < nums.length; i++) {
      if (Math.abs(nums[i] - nums[index]) > target) continue;
      max = Math.max(max, 1 + recurse(i));
    }

    return (cache[index] = max);
  };

  let jumps = recurse(0);

  return jumps === -Infinity ? -1 : jumps;
};

console.log(maximumJumps([0, 1, 3, 2, 4], 1));

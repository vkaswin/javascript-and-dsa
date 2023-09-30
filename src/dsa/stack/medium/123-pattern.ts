/*

Given an array of n integers nums, a 132 pattern is a subsequence of three integers nums[i], nums[j] and nums[k] such that i < j < k and nums[i] < nums[k] < nums[j].

Return true if there is a 132 pattern in nums, otherwise, return false.

Input: nums = [-1,3,2,0]
Output: true
Explanation: There are three 132 patterns in the sequence: [-1, 3, 2], [-1, 3, 0] and [-1, 2, 0].

*/

export const find132pattern = (nums: number[]) => {
  let stack: number[] = [];
  let k: number | null = null;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (k !== null && nums[i] < k) return true;

    while (stack.length && nums[i] > stack.at(-1)!) {
      k = stack.pop()!;
    }

    stack.push(nums[i]);
  }

  return false;
};

console.log(find132pattern([3, 1, 4, 2]));

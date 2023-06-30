/*

Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

*/

export const longestConsecutive = (nums: number[]) => {
  let set = new Set<number>(nums);
  let maxLen = 0;

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];

    if (set.has(num - 1)) continue;

    while (set.has(num)) num++;

    maxLen = Math.max(maxLen, num - nums[i]);
  }

  return maxLen;
};

console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));

/*

Given a binary array nums, you should delete one element from it.

Return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.

Input: nums = [0,1,1,1,0,1,1,0,1]
Output: 5
Explanation: After deleting the number in position 4, [0,1,1,1,1,1,0,1] longest subarray with value of 1's is [1,1,1,1,1].

*/

export const longestSubarray = (nums: number[]) => {
  let maxLength = 0;
  let left = 0;
  let right = 0;
  let zeroCount = 0;

  while (right < nums.length) {
    if (nums[right] === 0) zeroCount++;

    if (zeroCount > 1) {
      maxLength = Math.max(maxLength, right - left - 1);

      while (zeroCount !== 1 && left < nums.length) {
        if (nums[left] === 0) zeroCount--;
        left++;
      }
    }

    right++;
  }

  return Math.max(maxLength, right - left - 1);
};

console.log(longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1]));

/*

Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
Output: 10
Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

*/

export const longestOnes = (nums: number[], k: number) => {
  let left = 0;
  let right = 0;
  let count = 0;
  let maxLen = 0;

  while (right <= nums.length) {
    if (count > k) {
      count = 0;
      left += 1;
      right = left;
    } else {
      if (nums[right] === 0) count++;
      maxLen = Math.max(maxLen, right - left);
      right++;
    }
  }

  return maxLen;
};

console.log(
  longestOnes([0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1], 4)
);

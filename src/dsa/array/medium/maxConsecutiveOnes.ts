/*

Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
Output: 10
Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

*/

export const longestOnes = (nums: number[], k: number) => {
  let zeroCount = 0;
  let left = 0;
  let right = 0;
  let max = 0;

  while (right < nums.length) {
    if (nums[right++] === 0) zeroCount++;

    while (zeroCount > k) {
      if (nums[left++] === 0) zeroCount--;
    }

    max = Math.max(max, right - left);
  }

  return max;
};

console.log(
  longestOnes(
    [1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1],
    3
  )
);

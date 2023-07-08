/*

Given an array of positive integers nums and a positive integer target, return the minimal length of a 
subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead

Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.

*/

export const minSubArrayLen = (target: number, nums: number[]) => {
  let left = 0;
  let right = 0;
  let sum = 0;
  let minLength = Infinity;

  while (right < nums.length) {
    sum += nums[right];

    if (sum >= target) {
      while (sum >= target && left < nums.length) {
        minLength = Math.min(minLength, right - left + 1);
        sum -= nums[left];
        left++;
      }
    }

    right++;
  }

  return minLength === Infinity ? 0 : minLength;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));

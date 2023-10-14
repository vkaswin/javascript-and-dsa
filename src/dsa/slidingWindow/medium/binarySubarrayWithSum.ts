/*

Given a binary array nums and an integer goal, return the number of non-empty subarrays with a sum goal.

A subarray is a contiguous part of the array.

Input: nums = [1,0,1,0,1], goal = 2
Output: 4
Explanation: The 4 subarrays are bolded and underlined below:
[1,0,1,0,1]
[1,0,1,0,1]
[1,0,1,0,1]
[1,0,1,0,1]

*/

export const numSubarraysWithSum = (nums: number[], goal: number) => {
  let atMostK = (k: number) => {
    if (k < 0) return 0;

    let count = 0;
    let left = 0;
    let right = 0;
    let sum = 0;

    while (right < nums.length) {
      sum += nums[right++];

      while (left < nums.length && sum > k) {
        sum -= nums[left++];
      }

      count += right - left;
    }

    return count;
  };

  return atMostK(goal) - atMostK(goal - 1);
};

console.log(numSubarraysWithSum([1, 0, 1, 0, 1], 2));

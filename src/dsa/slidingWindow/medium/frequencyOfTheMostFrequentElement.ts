/*

The frequency of an element is the number of times it occurs in an array.

You are given an integer array nums and an integer k. In one operation, you can choose an index of nums and increment the element at that index by 1.

Return the maximum possible frequency of an element after performing at most k operations.

Input: nums = [1,2,4], k = 5
Output: 3
Explanation: Increment the first element three times and the second element two times to make nums = [4,4,4].
4 has a frequency of 3.

*/

export const maxFrequency = (nums: number[], k: number) => {
  nums.sort((a, b) => a - b);

  let left = 0;
  let right = 0;
  let sum = 0;
  let maxLen = 0;

  while (right < nums.length) {
    sum += nums[right];

    while ((right - left + 1) * nums[right] > sum + k) {
      sum -= nums[left++];
    }

    right++;
    maxLen = Math.max(maxLen, right - left);
  }

  return maxLen;
};

console.log(maxFrequency([1, 2, 4], 5));

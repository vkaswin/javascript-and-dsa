/*

You are given an array of positive integers nums and want to erase a subarray containing unique elements. The score you get by erasing the subarray is equal to the sum of its elements.

Return the maximum score you can get by erasing exactly one subarray.

An array b is called to be a subarray of a if it forms a contiguous subsequence of a, that is, if it is equal to a[l],a[l+1],...,a[r] for some (l,r).

Input: nums = [5,2,1,2,5,2,1,2,5]
Output: 8
Explanation: The optimal subarray here is [5,2,1] or [1,2,5].

*/

export const maximumUniqueSubarray = (nums: number[]) => {
  let sum = 0;
  let max = 0;
  let left = 0;
  let right = 0;
  let set = new Set();

  while (right < nums.length) {
    if (set.has(nums[right])) {
      max = Math.max(max, sum);
      sum -= nums[left];
      set.delete(nums[left]);
      left++;
    } else {
      set.add(nums[right]);
      sum += nums[right];
      right++;
    }
  }

  return Math.max(max, sum);
};

console.log(maximumUniqueSubarray([4, 2, 4, 5, 6]));

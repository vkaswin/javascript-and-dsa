/*

Given an integer array nums, return the number of subarrays filled with 0.

A subarray is a contiguous non-empty sequence of elements within an array.

Input: nums = [1,3,0,0,2,0,0,4]
Output: 6
Explanation: 
There are 4 occurrences of [0] as a subarray.
There are 2 occurrences of [0,0] as a subarray.
There is no occurrence of a subarray with a size more than 2 filled with 0. Therefore, we return 6.

*/

export const zeroFilledSubarray = (nums: number[]) => {
  let count = 0;
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i]) count = 0;
    else count++;
    result += count;
  }

  return result;
};

export const zeroFilledSubarrayAlternative = (nums: number[]) => {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) continue;

    let j = i + 1;
    let len = 1;

    while (nums[j] === 0) {
      j++;
      len++;
    }

    count += (len * (len + 1)) / 2;
    i = j;
  }

  return count;
};

console.log(zeroFilledSubarray([1, 3, 0, 0, 2, 0, 0, 4]));

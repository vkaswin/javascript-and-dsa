/*

You may recall that an array arr is a mountain array if and only if:

arr.length >= 3
There exists some index i (0-indexed) with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
Given an integer array arr, return the length of the longest subarray, which is a mountain. Return 0 if there is no mountain subarray.

Input: arr = [2,1,4,7,3,2,5]
Output: 5
Explanation: The largest mountain is [1,4,7,3,2] which has length 5.

*/

export const longestMountain = (arr: number[]) => {
  let left = 0;
  let right = 0;
  let maxLen = 0;

  while (right < arr.length) {
    let upwards = false;
    let downwards = false;

    while (right < arr.length && arr[right] < arr[right + 1]) {
      right++;
      upwards = true;
    }

    while (upwards && right < arr.length && arr[right] > arr[right + 1]) {
      right++;
      downwards = true;
    }

    let len = right - left + 1;

    if (len >= 3 && upwards && downwards) maxLen = Math.max(maxLen, len);
    else right++;

    left = right;
  }

  return maxLen;
};

console.log(longestMountain([2, 1, 4, 7, 3, 2, 5]));

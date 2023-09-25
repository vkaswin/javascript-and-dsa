/*

Given an integer array arr, return the length of a maximum size turbulent subarray of arr.

A subarray is turbulent if the comparison sign flips between each adjacent pair of elements in the subarray.

More formally, a subarray [arr[i], arr[i + 1], ..., arr[j]] of arr is said to be turbulent if and only if:

For i <= k < j:
arr[k] > arr[k + 1] when k is odd, and
arr[k] < arr[k + 1] when k is even.
Or, for i <= k < j:
arr[k] > arr[k + 1] when k is even, and
arr[k] < arr[k + 1] when k is odd.

Input: arr = [9,4,2,10,7,8,8,1,9]
Output: 5
Explanation: arr[1] > arr[2] < arr[3] > arr[4] < arr[5]

*/

export const maxTurbulenceSize = (arr: number[]) => {
  let left = 0;
  let right = 1;
  let maxLen = 1;

  let isTurbulent = (index: number) => {
    if (arr[right - 1] > arr[index] && arr[index] < arr[index + 1]) return true;
    if (arr[right - 1] < arr[index] && arr[index] > arr[index + 1]) return true;

    return false;
  };

  while (right < arr.length) {
    let len = right - left + 1;

    if (!isTurbulent(right)) {
      if (arr[right - 1] === arr[right]) len--;
      maxLen = Math.max(maxLen, len);
      left = right;
    }

    right++;
  }

  return maxLen;
};

console.log(maxTurbulenceSize([9, 4, 2, 10, 7, 8, 8, 1, 9]));

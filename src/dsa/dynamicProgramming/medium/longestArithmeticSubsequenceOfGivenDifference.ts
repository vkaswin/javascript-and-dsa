/*

Given an integer array arr and an integer difference, return the length of the longest subsequence in arr which is an arithmetic sequence such that the difference between adjacent elements in the subsequence equals difference.

A subsequence is a sequence that can be derived from arr by deleting some or no elements without changing the order of the remaining elements.

Input: arr = [1,2,3,4], difference = 1
Output: 4
Explanation: The longest arithmetic subsequence is [1,2,3,4].

*/

export const longestSubsequence = (arr: number[], difference: number) => {
  let map: Record<number, number> = {};
  let max = 0;

  for (let num of arr) {
    let prev = num - difference;

    if (prev in map) map[num] = 1 + map[prev];
    else map[num] = 1;

    max = Math.max(max, map[num]);
  }

  return max;
};

console.log(longestSubsequence([1, 2, 3, 4], 1));

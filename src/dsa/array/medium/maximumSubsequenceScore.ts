/*

You are given two 0-indexed integer arrays nums1 and nums2 of equal length n and a positive integer k. You must choose a subsequence of indices from nums1 of length k.

For chosen indices i0, i1, ..., ik - 1, your score is defined as:

The sum of the selected elements from nums1 multiplied with the minimum of the selected elements from nums2.
It can defined simply as: (nums1[i0] + nums1[i1] +...+ nums1[ik - 1]) * min(nums2[i0] , nums2[i1], ... ,nums2[ik - 1]).
Return the maximum possible score.

A subsequence of indices of an array is a set that can be derived from the set {0, 1, ..., n-1} by deleting some or no elements.

Input: nums1 = [1,3,3,2], nums2 = [2,1,3,4], k = 3
Output: 12
Explanation: 
The four possible subsequence scores are:
- We choose the indices 0, 1, and 2 with score = (1+3+3) * min(2,1,3) = 7.
- We choose the indices 0, 1, and 3 with score = (1+3+2) * min(2,1,4) = 6. 
- We choose the indices 0, 2, and 3 with score = (1+3+2) * min(2,3,4) = 12. 
- We choose the indices 1, 2, and 3 with score = (3+3+2) * min(1,3,4) = 8.
Therefore, we return the max score, which is 12.

*/

export const maxScore = (nums1: number[], nums2: number[], k: number) => {
  let map: Record<number, number> = {};

  for (let i = 0; i < nums2.length; i++) {
    map[nums2[i]] = i;
  }

  nums2.sort((a, b) => b - a);

  let min = nums2[k - 1];

  let arr = nums1
    .filter((_, index) => index !== map[min])
    .sort((a, b) => b - a);

  let sum = nums1[map[min]];

  for (let i = 1; i < k; i++) {
    sum += arr[i - 1];
  }

  return sum * min;
};

console.log(maxScore([1, 3, 3, 2], [2, 1, 3, 4], 3));

/*

Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of 
the two sorted arrays.
The overall run time complexity should be O(log (m+n)).

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.

*/

export const findMedianSortedArrays = (nums1: number[], nums2: number[]) => {
  let arr: number[] = [];
  let len = nums1.length + nums2.length;
  let maxLen = len / 2;
  let i = 0;
  let j = 0;

  while (arr.length <= maxLen) {
    if (nums1[i] !== undefined && nums2[j] !== undefined) {
      arr.push(nums2[j] > nums1[i] ? nums1[i++] : nums2[j++]);
    } else if (nums1[i] !== undefined) {
      arr.push(nums1[i++]);
    } else if (nums2[j] !== undefined) {
      arr.push(nums2[j++]);
    }
  }

  return len % 2 === 0
    ? (arr[arr.length - 1] + arr[arr.length - 2]) / 2
    : arr[arr.length - 1];
};

console.log(findMedianSortedArrays([1, 2], [3]));

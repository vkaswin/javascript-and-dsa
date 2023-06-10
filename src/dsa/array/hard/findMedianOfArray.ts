/*

Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of 
the two sorted arrays.
The overall run time complexity should be O(log (m+n)).

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.

*/

export const findMedianSortedArrays = (num1: number[], num2: number[]) => {
  let arr: number[] = [];
  let len = num1.length + num2.length;

  while (arr.length <= len / 2) {
    if (num1.length && num2.length)
      arr.push((num1[0] > num2[0] ? num2.shift() : num1.shift()) as number);
    else if (num1.length) arr.push(num1.shift() as number);
    else arr.push(num2.shift() as number);
  }

  return len % 2 === 0
    ? (arr[arr.length - 1] + arr[arr.length - 2]) / 2
    : arr[arr.length - 1];
};

console.log(findMedianSortedArrays([], [2, 3]));

/*

Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in 
the result must appear as many times as it shows in both arrays and you may return the result in 
any order.

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]

*/

export const intersect = (nums1: number[], nums2: number[]) => {
  let arr1 = [...new Set(nums1)];
  let arr2 = new Set(nums2);
  return arr1.filter((num) => arr2.has(num));
};

console.log(intersect([4, 9, 9, 5], [9, 4, 9, 8, 4]));

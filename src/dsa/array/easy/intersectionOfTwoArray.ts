/*

Given two integer arrays nums1 and nums2, return an array of their intersection. 
Each element in the result must be unique and you may return the result in any order.

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.

*/

export const intersection = (nums1: number[], nums2: number[]) => {
  const hash = new Set(nums1);
  return [...new Set(nums2)].filter((num) => hash.has(num));
};

console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));

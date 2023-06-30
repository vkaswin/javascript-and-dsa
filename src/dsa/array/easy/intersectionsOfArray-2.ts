/*

Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in 
the result must appear as many times as it shows in both arrays and you may return the result in 
any order.

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]

*/

export const intersect = (nums1: number[], nums2: number[]) => {
  let obj: Record<number, number> = {};
  let result: number[] = [];

  for (let i = 0; i < nums1.length; i++) {
    obj[nums1[i]] = (obj[nums1[i]] || 0) + 1;
  }

  for (let i = 0; i < nums2.length; i++) {
    if (!obj[nums2[i]]) continue;
    obj[nums2[i]] -= 1;
    result.push(nums2[i]);
  }

  return result;
};

console.log(intersect([4, 9, 9, 5], [9, 4, 9, 8, 4]));

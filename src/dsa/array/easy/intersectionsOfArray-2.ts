/*

Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in 
the result must appear as many times as it shows in both arrays and you may return the result in 
any order.

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]

*/

export const intersect = (nums1: number[], nums2: number[]) => {
  let freq = new Map<number, number>();
  let result: number[] = [];

  for (let num of nums1) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }
  for (let num of nums2) {
    if (!freq.has(num)) continue;

    freq.set(num, freq.get(num)! - 1);
    if (freq.get(num) === 0) freq.delete(num);
    result.push(num);
  }
  return result;
};

console.log(intersect([4, 9, 9, 5], [9, 4, 9, 8, 4]));

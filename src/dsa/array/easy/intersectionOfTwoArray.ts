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

export const intersectionUsingBinarySearch = (
  nums1: number[],
  nums2: number[]
) => {
  nums1 = [...new Set(nums1)];
  nums2 = [...new Set(nums2)].sort((a, b) => a - b);
  let result = [];

  let search = (target: number) => {
    let left = 0;
    let right = nums2.length - 1;
    while (left <= right) {
      let mid = Math.floor((right + left) / 2);
      if (nums2[mid] === target) return mid;
      if (target > nums2[mid]) left = mid + 1;
      else right = mid - 1;
    }
    return -1;
  };

  for (let i = 0; i < nums1.length; i++) {
    if (search(nums1[i]) !== -1) result.push(nums1[i]);
  }

  return result;
};

console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));

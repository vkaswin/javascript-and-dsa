/*

The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.

Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
Output: [-1,3,-1]
Explanation: The next greater element for each value of nums1 is as follows:
- 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
- 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
- 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.

*/

export const nextGreaterElement = (nums1: number[], nums2: number[]) => {
  let map: Record<number, number> = {};
  let stack: number[] = [];

  for (let i = nums2.length - 1; i >= 0; i--) {
    while (stack.length && nums2[i] > stack.at(-1)!) {
      stack.pop();
    }
    map[nums2[i]] = !stack.length ? -1 : stack.at(-1)!;
    stack.push(nums2[i]);
  }

  return nums1.map((num) => map[num]);
};

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));

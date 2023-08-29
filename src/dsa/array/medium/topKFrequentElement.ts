/*

Given an integer array nums and an integer k, return the k most frequent elements.
You may return the answer in any order.

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

*/

export const topKFrequent = (nums: number[], k: number) => {
  let obj: Record<number, number> = {};

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (typeof obj[num] === "undefined") obj[num] = 1;
    obj[num] += 1;
  }

  return Object.entries(obj)
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map(([key]) => +key);
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));

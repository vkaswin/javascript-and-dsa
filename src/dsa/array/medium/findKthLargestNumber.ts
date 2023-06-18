/*

Given an integer array nums and an integer k, return the kth largest element in the array.
Note that it is the kth largest element in the sorted order, not the kth distinct element.
You must solve it in O(n) time complexity.

Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
Output: 4

*/

export const findKthLargest = (nums: number[], k: number) => {
  let search = (nums: number[], k: number) => {
    if (nums.length <= 1) return nums[0];

    let left: number[] = [];
    let right: number[] = [];

    for (let i = 1; i < nums.length; i++) {
      if (nums[i] > nums[0]) left.push(nums[i]);
      else right.push(nums[i]);
    }

    let pivot = left.length;

    if (pivot === k) return nums[0];

    return search(k > pivot ? right : left, k > pivot ? k - pivot - 1 : k);
  };

  return search(nums, k - 1);
};

console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));

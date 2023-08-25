/*

Given an integer array nums and an integer k, return the kth largest element in the array.
Note that it is the kth largest element in the sorted order, not the kth distinct element.
You must solve it in O(n) time complexity.

Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
Output: 4

*/

export const findKthLargest = (nums: number[], k: number) => {
  k = nums.length - k;

  let quickSelect = (left: number, right: number) => {
    let pivot = nums[right];
    let pivotIndex = left;

    for (let i = left; i < right; i++) {
      if (nums[i] >= pivot) continue;
      [nums[pivotIndex], nums[i]] = [nums[i], nums[pivotIndex]];
      pivotIndex++;
    }

    [nums[right], nums[pivotIndex]] = [nums[pivotIndex], nums[right]];

    if (pivotIndex > k) return quickSelect(left, pivotIndex - 1);
    else if (pivotIndex < k) return quickSelect(pivotIndex + 1, right);
    return nums[pivotIndex];
  };

  return quickSelect(0, nums.length - 1);
};

console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));

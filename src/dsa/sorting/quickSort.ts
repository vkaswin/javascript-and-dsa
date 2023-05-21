export const quickSort = (nums: number[]): number[] => {
  if (nums.length <= 1) return nums;

  let pivot = nums[0];
  let left = [];
  let right = [];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < pivot) left.push(nums[i]);
    else right.push(nums[i]);
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
};

console.log(quickSort([3, 7, 1, 8, 5, 2, 6, 4]));

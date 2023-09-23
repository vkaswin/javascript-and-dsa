export const numSubarrayProductLessThanK = (nums: number[], k: number) => {
  let left = 0;
  let right = 0;
  let prd = 1;
  let count = 0;

  while (right < nums.length) {
    prd *= nums[right++];

    while (left < right && prd >= k) prd /= nums[left++];

    count += right - left;
  }

  return count;
};

console.log(
  numSubarrayProductLessThanK(
    [10, 9, 10, 4, 3, 8, 3, 3, 6, 2, 10, 10, 9, 3],
    19
  )
);

export const majorityElement = (nums: number[]) => {
  let set = new Set<number>();
  let count = 1;
  let maxCount = nums.length / 3;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) count++;
    else count = 1;
    if (!set.has(nums[i]) && count > maxCount) set.add(nums[i]);
  }

  return [...set];
};

console.log(majorityElement([3, 2, 3]));

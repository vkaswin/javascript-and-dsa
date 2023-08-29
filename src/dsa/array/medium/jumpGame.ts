function canJump(nums: number[]): boolean {
  let finalPosition = nums.length - 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] >= finalPosition - i) finalPosition = i;
  }
  return finalPosition === 0;
}

console.log(canJump([2, 0, 0]));

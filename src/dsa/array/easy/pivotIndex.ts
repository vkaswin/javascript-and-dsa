export const pivotIndex = (nums: number[]) => {
  let rightSum = 0;

  for (let i = 0; i < nums.length; i++) {
    rightSum += nums[i];
  }

  let leftSum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (leftSum === rightSum - nums[i]) return i;
    rightSum -= nums[i];
    leftSum += nums[i];
  }

  return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));

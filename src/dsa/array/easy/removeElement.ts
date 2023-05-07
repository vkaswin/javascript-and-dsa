const removeElement = (nums: number[], val: number) => {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      if (nums[i + 1]) {
        nums[i] = nums[i + 1];
      }
      count++;
    }
  }

  return nums.length - count;
};

console.log(removeElement([3, 2, 2, 3], 3));

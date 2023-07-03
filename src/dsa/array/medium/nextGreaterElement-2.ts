export const nextGreaterElements = (nums: number[]) => {
  let result: number[] = [];
  let len = nums.length;
  let max = Math.max(...nums);

  let nextMax = (value: number, index: number) => {
    while (true) {
      if (nums[index] > value) return nums[index];
      index = ++index % len;
    }
  };

  for (let i = 0; i < len; i++) {
    result.push(nums[i] === max ? -1 : nextMax(nums[i], (i + 1) % len));
  }

  return result;
};

console.log(nextGreaterElements([5, 4, 3, 2, 1]));

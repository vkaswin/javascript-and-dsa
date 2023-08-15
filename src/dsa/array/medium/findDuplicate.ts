export const findDuplicate = (nums: number[]) => {
  let slow = 0;
  let fast = 0;

  while (true) {
    slow += 1;
    fast += 2;

    if (nums[slow % nums.length] === nums[fast % nums.length]) {
      return nums[slow % nums.length];
    }
  }
};

console.log(
  findDuplicate([
    18, 13, 14, 17, 9, 19, 7, 17, 4, 6, 17, 5, 11, 10, 2, 15, 8, 12, 16, 17,
  ])
);

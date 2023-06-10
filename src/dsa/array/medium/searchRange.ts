export const searchRange = (nums: number[], target: number) => {
  let indexes: number[] = [];
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
  }
};

console.log(searchRange([5, 7, 8, 10], 8));

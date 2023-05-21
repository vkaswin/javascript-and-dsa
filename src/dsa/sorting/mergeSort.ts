const merge = (left: number[], right: number[]) => {
  let sorted: number[] = [];

  while (left.length && right.length) {
    sorted.push((left[0] > right[0] ? right.shift() : left.shift()) as number);
  }

  return [...sorted, ...left, ...right];
};

export const mergeSort = (nums: number[]): number[] => {
  if (nums.length <= 1) return nums;

  let middle = Math.floor(nums.length / 2);
  let left = nums.slice(0, middle);
  let right = nums.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
};

console.log(mergeSort([3, 7, 1, 8, 5, 2, 6, 4]));

export const insertionSort = (nums: number[]) => {
  for (let i = 1; i < nums.length; i++) {
    let insert = nums[i];
    let j = i - 1;

    while (j >= 0 && nums[j] > insert) {
      nums[j + 1] = nums[j];
      j--;
    }

    nums[j + 1] = insert;
  }

  return nums;
};

console.log(insertionSort([3, 7, 1, 8, 5, 2, 6, 4]));

/*

You have a list arr of all integers in the range [1, n] sorted in a strictly increasing order. Apply the following algorithm on arr:

Starting from left to right, remove the first number and every other number afterward until you reach the end of the list.
Repeat the previous step again, but this time from right to left, remove the rightmost number and every other number from the remaining numbers.
Keep repeating the steps again, alternating left to right and right to left, until a single number remains.
Given the integer n, return the last number that remains in arr.

Input: n = 9
Output: 6
Explanation:
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
arr = [2, 4, 6, 8]
arr = [2, 6]
arr = [6]


*/

export const lastRemaining = (n: number) => {
  let arr: number[] = [];

  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }

  let recurse = (nums: number[], isLeft: boolean): number => {
    if (nums.length === 1) return nums.at(0)!;

    let arr: number[] = [];

    for (
      let i = isLeft ? 0 : nums.length - 1;
      isLeft ? i < nums.length : i >= 0;
      isLeft ? (i += 2) : (i -= 2)
    ) {
      if (isLeft) {
        if (nums[i + 1] !== undefined) arr.push(nums[i + 1]);
      } else {
        if (nums[i - 1] !== undefined) arr.push(nums[i - 1]);
      }
    }

    if (!isLeft) arr.reverse();

    return recurse(arr, !isLeft);
  };

  return recurse(arr, true);
};

console.log(lastRemaining(9));

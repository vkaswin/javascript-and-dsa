/*

You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

You are given an integer array nums representing the data status of this set after the error.

Find the number that occurs twice and the number that is missing and return them in the form of an array.

Input: nums = [1,2,2,4]
Output: [2,3]

*/

export const findErrorNums = (nums: number[]) => {
  let set = new Set();
  let sum = 0;
  let n = nums.length;
  let totalSum = (n * (n + 1)) / 2;
  let duplicate: number = NaN;

  for (let num of nums) {
    sum += num;
    if (isNaN(duplicate) && set.has(num)) duplicate = num;
    set.add(num);
  }

  return [duplicate, totalSum - (sum - duplicate)];
};

console.log(findErrorNums([1, 2, 2, 4]));

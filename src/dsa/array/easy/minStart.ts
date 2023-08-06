/*

Given an array of integers nums, you start with an initial positive value startValue.

In each iteration, you calculate the step by step sum of startValue plus elements in nums (from left to right).

Return the minimum positive value of startValue such that the step by step sum is never less than 1.

*/

const minStartValue = (nums: number[]) => {
  let currSum = 0;
  let min = Infinity;

  for (let num of nums) {
    currSum += num;
    min = Math.min(currSum, min);
  }

  if (min > 0) return 1;

  return -min + 1;
};

console.log(minStartValue([-3, 2, -3, 4, 2]));

/*

Given an integer array nums, a reducer function fn, and an initial value init, return a reduced array.
A reduced array is created by applying the following operation: 
val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element 
in the array has been processed. The final value of val is returned.
If the length of the array is 0, it should return init.
Please solve it without using the built-in Array.reduce method.

Input: 
nums = [1,2,3,4]
fn = function sum(accum, curr) { return accum + curr; }
init = 0
Output: 10
Explanation:
initially, the value is init=0.
(0) + nums[0] = 1
(1) + nums[1] = 3
(3) + nums[2] = 6
(6) + nums[3] = 10
The final answer is 10.

*/

export const reduce = (
  nums: number[],
  fn: (accumulator: number, current: number) => number,
  init: number
) => {
  let accumulator = init;

  for (let i = 0; i < nums.length; i++) {
    accumulator = fn(accumulator, nums[i]);
  }

  return accumulator;
};

console.log(reduce([1, 2, 3, 4], (accum, curr) => accum + curr, 0));

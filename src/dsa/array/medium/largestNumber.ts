/*

Given a list of non-negative integers nums, arrange them such that they form the largest number and return it.

Since the result may be very large, so you need to return a string instead of an integer.

Input: nums = [3,30,34,5,9]
Output: "9534330"

*/

export const largestNumber = (nums: number[]) => {
  let str = nums
    .sort((a, b) => {
      let num1 = a.toString();
      let num2 = b.toString();
      if (num1 + num2 > num2 + num1) return -1;
      return 1;
    })
    .join("");

  return +str === 0 ? "0" : str;
};

console.log(largestNumber([3, 30, 34, 5, 9]));

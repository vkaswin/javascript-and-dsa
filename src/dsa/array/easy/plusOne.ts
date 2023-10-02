/*

You are given a large integer represented as an integer array digits, where each digits[i] is the
ith digit of the integer. The digits are ordered from most significant to least significant
in left-to-right order. The large integer does not contain any leading 0's.
Increment the large integer by one and return the resulting array of digits.

Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].

*/

export const plusOne = (digits: number[]) => {
  let nums = new Array(digits.length).fill(0);
  let index = nums.length - 1;
  let carry = 1;

  for (let i = digits.length - 1; i >= 0; i--) {
    let sum = digits[index];
    if (carry) {
      sum += carry;
      carry = 0;
    }
    nums[index--] += sum % 10;
    if (sum > 9) carry = 1;
  }

  if (carry) nums.unshift(1);

  return nums;
};

console.log(plusOne([1, 2, 3]));

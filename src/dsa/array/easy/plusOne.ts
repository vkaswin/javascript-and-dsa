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
  let addOne = (index: number) => {
    if (digits[index] < 9) return (digits[index] += 1);

    digits[index] = 0;

    if (index === 0) return;

    if (digits[index - 1] >= 9) addOne(index - 1);
    else digits[index - 1] += 1;
  };

  addOne(digits.length - 1);

  if (digits[0] === 0) digits.unshift(1);

  return digits;
};

console.log(plusOne([9, 9]));

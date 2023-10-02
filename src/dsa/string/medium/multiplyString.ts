/*

Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

Input: num1 = "123", num2 = "456"
Output: "56088"

*/

export const multiply = (num1: string, num2: string) => {
  let len = num1.length + num2.length - 1;
  let nums: number[] = new Array(len + 1).fill(0);

  for (let i = num1.length - 1; i >= 0; i--) {
    let index = len--;
    for (let j = num2.length - 1; j >= 0; j--) {
      let prd = +num1[i] * +num2[j] + nums[index];

      // current
      nums[index] = prd % 10;
      // carry
      nums[--index] += Math.floor(prd / 10);
    }
  }

  // remove zeros in front of it
  while (nums.length && !nums.at(0)) nums.shift();

  return !nums.length ? "0" : nums.join("");
};

console.log(multiply("0", "0"));

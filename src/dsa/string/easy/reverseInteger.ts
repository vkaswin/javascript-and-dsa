/*

Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value
to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Input: x = 123
Output: 321

Input: x = -123
Output: -321

Input: x = 120
Output: 21

*/

export const reverseInteger = (x: number) => {
  let num = x.toString();
  let str = "";

  for (let i = 0; i < num.length; i++) {
    if (i === 0 && num[i] === "-") {
      str += num[i];
    }
  }

  return str;
};

console.log(reverseInteger(123), reverseInteger(-123), reverseInteger(120));

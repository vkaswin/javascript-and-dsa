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
  let str = x
    .toString()
    .slice(x > 0 ? 0 : 1)
    .split("")
    .reverse()
    .join("");

  return +str > Math.pow(2, 31) ? 0 : x > 0 ? +str : -+str;
};

console.log(reverseInteger(123), reverseInteger(-123), reverseInteger(120));

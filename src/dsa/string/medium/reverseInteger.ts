/*

Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value 
to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

Input: x = 123
Output: 321

Input: x = -123
Output: -321

*/

const reverse = (x: number) => {
  let str = (x > 0 ? x.toString() : x.toString().substring(1))
    .split("")
    .reverse()
    .join("");

  return +str >> 0 != +str ? 0 : x > 0 ? +str : -+str;
};

console.log(reverse(-321));

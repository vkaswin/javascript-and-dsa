/*

Given a positive integer num, return true if num is a perfect square or false otherwise.

A perfect square is an integer that is the square of an integer. In other words, it is the product of some integer with itself.

You must not use any built-in library function, such as sqrt.

Input: num = 16
Output: true
Explanation: We return true because 4 * 4 = 16 and 4 is an integer.

*/

export const isPerfectSquare = (num: number) => {
  let left = 1;
  let right = num;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let sqr = mid * mid;
    if (sqr === num) return true;
    if (sqr > num) right = mid - 1;
    else left = mid + 1;
  }

  return false;
};

console.log(isPerfectSquare(16));

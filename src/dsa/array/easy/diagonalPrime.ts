/*

You are given a 0-indexed two-dimensional integer array nums.
Return the largest prime number that lies on at least one of the diagonals of nums. 
In case, no prime is present on any of the diagonals, return 0.

Note that:
An integer is prime if it is greater than 1 and has no positive integer divisors other than 1 and itself.
An integer val is on one of the diagonals of nums if there exists an integer i for which nums[i][i] = val or an i for which nums[i][nums.length - i - 1] = val.

Input: nums = [[1,2,3],[5,6,7],[9,10,11]]
Output: 11
Explanation: The numbers 1, 3, 6, 9, and 11 are the only numbers present on at least one of
the diagonals. Since 11 is the largest prime, we return 11.

*/

const diagonalPrime = function (nums: number[][]) {
  let max = 0;
  let isPrime = (num: number) => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  };
  for (let i = 0; i < nums.length; i++) {
    if (nums[i][i] > max && isPrime(nums[i][i])) max = nums[i][i];
    if (
      nums[nums.length - i - 1][i] > max &&
      isPrime(nums[nums.length - i - 1][i])
    )
      max = nums[nums.length - i - 1][i];
  }
  return max;
};

console.log(
  diagonalPrime([
    [1, 2, 3],
    [5, 6, 7],
    [9, 10, 11],
  ])
);

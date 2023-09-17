/*

Given an array of integers arr, return the number of subarrays with an odd sum.

Since the answer can be very large, return it modulo 109 + 7.

Input: arr = [1,3,5]
Output: 4
Explanation: All subarrays are [[1],[1,3],[1,3,5],[3],[3,5],[5]]
All sub-arrays sum are [1,4,9,3,8,5].
Odd sums are [1,9,3,5] so the answer is 4.

*/

export const numOfSubarrays = (arr: number[]) => {
  let count = 0;
  let mod = Math.pow(10, 9) + 7;

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      if (sum % 2 !== 0) count++;
    }
  }

  return count % mod;
};

console.log(numOfSubarrays([1, 2, 3, 4, 5, 6, 7]));

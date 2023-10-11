/*

You are given an array of integers arr and an integer target.

You have to find two non-overlapping sub-arrays of arr each with a sum equal target. There can be multiple answers so you have to find an answer where the sum of the lengths of the two sub-arrays is minimum.

Return the minimum sum of the lengths of the two required sub-arrays, or return -1 if you cannot find such two sub-arrays.

Input: arr = [7,3,4,7], target = 7
Output: 2
Explanation: Although we have three non-overlapping sub-arrays of sum = 7 ([7], [3,4] and [7]), but we will choose the first and third sub-arrays as the sum of their lengths is 2.

*/

export const minSumOfLengths = (arr: number[], target: number) => {
  let currMin = Infinity;
  let min = Infinity;
  let left = 0;
  let right = 0;
  let sum = 0;
  let dp: number[] = [];

  while (right < arr.length) {
    sum += arr[right++];

    while (sum > target) {
      sum -= arr[left++];
    }

    if (sum === target) {
      let len = right - left;

      if (dp[left] !== undefined) min = Math.min(min, len + dp[left]);

      currMin = Math.min(currMin, len);
    }

    dp[right] = currMin;
  }

  return min === Infinity ? -1 : min;
};

console.log(minSumOfLengths([2, 1, 3, 3, 2, 3, 1], 6));

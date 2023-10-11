/*

You are given an integer array nums and an array queries where queries[i] = [vali, indexi].

For each query i, first, apply nums[indexi] = nums[indexi] + vali, then print the sum of the even values of nums.

Return an integer array answer where answer[i] is the answer to the ith query.

Input: nums = [1,2,3,4], queries = [[1,0],[-3,1],[-4,0],[2,3]]
Output: [8,6,2,4]
Explanation: At the beginning, the array is [1,2,3,4].
After adding 1 to nums[0], the array is [2,2,3,4], and the sum of even values is 2 + 2 + 4 = 8.
After adding -3 to nums[1], the array is [2,-1,3,4], and the sum of even values is 2 + 4 = 6.
After adding -4 to nums[0], the array is [-2,-1,3,4], and the sum of even values is -2 + 4 = 2.
After adding 2 to nums[3], the array is [-2,-1,3,6], and the sum of even values is -2 + 6 = 4.

*/

export const sumEvenAfterQueries = (nums: number[], queries: number[][]) => {
  let result = [];
  let evenSum = 0;

  for (let num of nums) {
    if (num % 2) continue;
    evenSum += num;
  }

  for (let [val, index] of queries) {
    let num = nums[index] + val;

    if (num % 2 === 0) {
      if (nums[index] % 2 === 0) {
        evenSum += num - nums[index];
      } else {
        evenSum += num;
      }
    } else {
      if (nums[index] % 2 === 0) {
        evenSum -= nums[index];
      }
    }

    nums[index] = num;

    result.push(evenSum);
  }

  return result;
};

console.log(
  sumEvenAfterQueries(
    [1, 2, 3, 4],
    [
      [1, 0],
      [-3, 1],
      [-4, 0],
      [2, 3],
    ]
  )
);

/*

You are given an integer array nums. You want to maximize the number of points you get by performing the following operation any number of times:

Pick any nums[i] and delete it to earn nums[i] points. Afterwards, you must delete every element equal to nums[i] - 1 and every element equal to nums[i] + 1.
Return the maximum number of points you can earn by applying the above operation some number of times.

Input: nums = [2,2,3,3,3,4]
Output: 9
Explanation: You can perform the following operations:
- Delete a 3 to earn 3 points. All 2's and 4's are also deleted. nums = [3,3].
- Delete a 3 again to earn 3 points. nums = [3].
- Delete a 3 once more to earn 3 points. nums = [].
You earn a total of 9 points.

*/

export const deleteAndEarn = (nums: number[]) => {
  let map: Record<number, number> = {};

  for (let num of nums) {
    map[num] = (map[num] || 0) + 1;
  }

  let arr = Object.keys(map)
    .map((key) => +key)
    .sort((a, b) => a - b);

  let dp = new Array(arr.length).fill(0);
  dp[0] = arr[0] * map[arr[0]];

  for (let i = 1; i < arr.length; i++) {
    dp[i] = Math.max(
      dp[i - 1],
      arr[i] * map[arr[i]] + (map[arr[i] - 1] ? dp[i - 2] || 0 : dp[i - 1])
    );
  }

  return dp[dp.length - 1];
};

console.log(deleteAndEarn([2, 2, 3, 3, 3, 4]));

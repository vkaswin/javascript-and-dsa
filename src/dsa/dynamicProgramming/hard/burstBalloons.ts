/*

You are given n balloons, indexed from 0 to n - 1. Each balloon is painted with a number on it represented by an array nums. You are asked to burst all the balloons.

If you burst the ith balloon, you will get nums[i - 1] * nums[i] * nums[i + 1] coins. If i - 1 or i + 1 goes out of bounds of the array, then treat it as if there is a balloon with a 1 painted on it.

Return the maximum coins you can collect by bursting the balloons wisely.

Input: nums = [3,1,5,8]
Output: 167
Explanation:
nums = [3,1,5,8] --> [3,5,8] --> [3,8] --> [8] --> []
coins =  3*1*5    +   3*5*8   +  1*3*8  + 1*8*1 = 167

*/

export const maxCoins = (nums: number[]) => {
  let dp: number[][] = new Array(nums.length + 1)
    .fill(0)
    .map(() => new Array(nums.length + 1));

  nums.push(1);
  nums.unshift(1);

  let dfs = (left: number, right: number) => {
    if (left > right) return 0;

    if (dp[left][right] !== undefined) return dp[left][right];

    let max = 0;

    for (let i = left; i <= right; i++) {
      let coins = nums[left - 1] * nums[i] * nums[right + 1];
      coins += dfs(left, i - 1) + dfs(i + 1, right);
      max = Math.max(max, coins);
    }

    return (dp[left][right] = max);
  };

  return dfs(1, nums.length - 2);
};

console.log(maxCoins([3, 1, 5, 8]));

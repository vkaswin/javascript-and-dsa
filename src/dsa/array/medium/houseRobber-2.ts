/*

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

Input: nums = [2,3,2]
Output: 3
Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.

*/

export const rob = (nums: number[]) => {
  if (nums.length === 1) return nums[0];

  let skipFirstHouse = [];
  let skipLastHouse = [];

  let maxRob = (nums: number[]) => {
    let rob1 = 0;
    let rob2 = 0;
    for (let num of nums) {
      let temp = Math.max(num + rob1, rob2);
      rob1 = rob2;
      rob2 = temp;
    }
    return rob2;
  };

  for (let i = 1; i < nums.length; i++) {
    skipFirstHouse.push(nums[i]);
    skipLastHouse.push(nums[i - 1]);
  }

  return Math.max(maxRob(skipFirstHouse), maxRob(skipLastHouse));
};

console.log(rob([1]));

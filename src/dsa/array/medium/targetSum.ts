/*

You are given an integer array nums and an integer target.

You want to build an expression out of nums by adding one of the symbols '+' and '-' before each integer in nums and then concatenate all the integers.

For example, if nums = [2, 1], you can add a '+' before 2 and a '-' before 1 and concatenate them to build the expression "+2-1".
Return the number of different expressions that you can build, which evaluates to target.

Input: nums = [1,1,1,1,1], target = 3
Output: 5
Explanation: There are 5 ways to assign symbols to make the sum of nums be target 3.
-1 + 1 + 1 + 1 + 1 = 3
+1 - 1 + 1 + 1 + 1 = 3
+1 + 1 - 1 + 1 + 1 = 3
+1 + 1 + 1 - 1 + 1 = 3
+1 + 1 + 1 + 1 - 1 = 3

*/

export const findTargetSumWays = (nums: number[], target: number) => {
  let cache: Record<string, number> = {};

  let dfs = (index: number, sum: number) => {
    let key = index + "," + sum;

    if (cache[key] !== undefined) return cache[key];

    if (index >= nums.length) return sum === target ? 1 : 0;

    cache[key] =
      dfs(index + 1, sum + nums[index]) + dfs(index + 1, sum - nums[index]);

    return cache[key];
  };

  return dfs(0, 0);
};

console.log(findTargetSumWays([1, 1, 1, 1, 1], 3));

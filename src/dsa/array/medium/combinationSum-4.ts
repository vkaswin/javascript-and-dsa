/*

Given an array of distinct integers nums and a target integer target, return the number of possible combinations that add up to target.

The test cases are generated so that the answer can fit in a 32-bit integer.

Input: nums = [1,2,3], target = 4
Output: 7
Explanation:
The possible combination ways are:
(1, 1, 1, 1)
(1, 1, 2)
(1, 2, 1)
(1, 3)
(2, 1, 1)
(2, 2)
(3, 1)
Note that different sequences are counted as different combinations.


*/

// Bottom Up Approach
export const combinationSum4 = (nums: number[], target: number) => {
  let dp = new Array(target + 1).fill(0);
  dp[0] = 1;

  for (let i = 1; i <= target; i++) {
    for (let num of nums) {
      if (num > i) continue;
      dp[i] += dp[i - num];
    }
  }

  return dp[target];
};

// Top Down Approach
export const combinationSum4TopDown = (nums: number[], target: number) => {
  let cache: Record<number, number> = {};

  let dfs = (target: number): number => {
    if (target === 0) return 1;

    if (target < 0) return 0;

    if (cache[target] !== undefined) return cache[target];

    let count = 0;

    for (let num of nums) {
      count += dfs(target - num);
    }

    cache[target] = count;

    return count;
  };

  return dfs(target);
};

console.log(
  combinationSum4(
    [
      10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160,
      170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300, 310,
      320, 330, 340, 350, 360, 370, 380, 390, 400, 410, 420, 430, 440, 450, 460,
      470, 480, 490, 500, 510, 520, 530, 540, 550, 560, 570, 580, 590, 600, 610,
      620, 630, 640, 650, 660, 670, 680, 690, 700, 710, 720, 730, 740, 750, 760,
      770, 780, 790, 800, 810, 820, 830, 840, 850, 860, 870, 880, 890, 900, 910,
      920, 930, 940, 950, 960, 970, 980, 990, 111,
    ],
    999
  )
);

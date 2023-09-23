/*

Given a series of stones with certain values, whenever you jump on to any stone ,number of points you would earn will be length you have jumped times the value of that stone.
Assume you have reached to the last stone, what would be the maximum score earned

Example : [3,7,10,12,8,10]
for 3 - score 0
for 3,7 - max score till 7 is 7
for 3,7,10 - max score would be max(10x2, 7+10)- 20
for 3,7,10,12 - max score max(12x3,12+20,12x2+7) - 36
n so on

Input : nums = [3,7,10,12,8,10],  k = 2
Output : 56

*/

export const findMaxScore = (nums: number[], k: number) => {
  let cache: Record<string, number> = {};

  let recurse = (index: number, jumps: number) => {
    let key = `${index},${jumps}`;

    if (jumps === k) return index === nums.length - 1 ? 0 : -Infinity;

    if (key in cache) return cache[key];

    let score = -Infinity;

    for (let i = index + 1; i < nums.length; i++) {
      score = Math.max(score, (i - index) * nums[i] + recurse(i, jumps + 1));
    }

    return (cache[key] = score);
  };

  return recurse(0, 0);
};

console.log(findMaxScore([3, 7, 10, 12, 8, 10], 2));

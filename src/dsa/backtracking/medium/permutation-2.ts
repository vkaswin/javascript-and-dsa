/*

Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order

Input: nums = [1,1,2]
Output:
[[1,1,2],
 [1,2,1],
 [2,1,1]]

*/

const permuteUnique = (nums: number[]) => {
  let result: number[][] = [];
  let arr: number[] = [];
  nums.sort((a, b) => a - b);

  let recurse = (nums: number[], arr: number[], result: number[][]) => {
    if (nums.length === 0) return result.push([...arr]);

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === nums[i + 1]) continue;
      arr.push(nums[i]);
      let filter = nums.filter((_, index) => index !== i);
      recurse(filter, arr, result);
      arr.pop();
    }
  };

  recurse(nums, arr, result);

  return result;
};

console.log(permuteUnique([1, 2, 3]));

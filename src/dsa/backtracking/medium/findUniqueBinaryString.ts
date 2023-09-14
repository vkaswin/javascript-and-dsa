/*

Given an array of strings nums containing n unique binary strings each of length n, return a binary string of length n that does not appear in nums. If there are multiple answers, you may return any of them.

Input: nums = ["111","011","001"]
Output: "101"
Explanation: "101" does not appear in nums. "000", "010", "100", and "110" would also be correct

*/

export const findDifferentBinaryString = (nums: string[]) => {
  if (!nums.length) return "";

  let set = new Set(nums);
  let n = nums[0].length;

  let backtrack = (str: string): string => {
    if (str.length === n && !set.has(str)) return str;

    if (str.length > n || set.has(str)) return "";

    return backtrack(str + "0") || backtrack(str + "1");
  };

  return backtrack("");
};

console.log(findDifferentBinaryString(["111", "011", "001", "000"]));

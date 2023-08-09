/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Input: strs = ["flower","flow","flight"]
Output: "fl"

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
*/

export const longestCommonPrefix = (strs: string[]) => {
  let prefix = "";

  strs.sort((a, b) => a.localeCompare(b));

  let first = strs[0];
  let last = strs[strs.length - 1];

  for (let i = 0; i < first.length; i++) {
    if (first[i] !== last[i]) break;
    prefix += first[i];
  }

  return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));

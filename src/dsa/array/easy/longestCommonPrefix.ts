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
  let smallestString = strs[0];

  for (let i = 1; i < strs.length; i++) {
    let str = strs[i];
    if (str.length < smallestString.length) {
      smallestString = str;
    }
  }

  for (let i = 0; i < smallestString.length; i++) {
    let char = smallestString[i];

    if (!strs.every((str) => str[i] === char)) break;

    prefix += char;
  }

  return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));

/*

Given an array of strings strs, group the anagrams together. You can return the answer in any order.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
typically using all the original letters exactly once.

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

*/

export const groupAnagrams = (strs: string[]) => {
  let obj = strs.reduce((acc, curr) => {
    let reverse = curr.split("").sort().join("");
    if (!acc[reverse]) acc[reverse] = [curr];
    else acc[reverse].push(curr);
    return acc;
  }, {} as Record<string, string[]>);

  return Object.values(obj).sort((a, b) => a.length - b.length);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

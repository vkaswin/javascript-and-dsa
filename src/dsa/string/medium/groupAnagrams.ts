/*

Given an array of strings strs, group the anagrams together. You can return the answer in any order.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
typically using all the original letters exactly once.

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

*/

export const groupAnagrams = (strs: string[]) => {
  return Object.values(
    strs.reduce((acc, curr) => {
      let str = curr
        .split("")
        .sort((a, b) => a.localeCompare(b))
        .join("");
      if (str in acc) acc[str].push(curr);
      else acc[str] = [curr];
      return acc;
    }, {} as Record<string, string[]>)
  );
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

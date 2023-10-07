/*

Given an array of strings words (without duplicates), return all the concatenated words in the given list of words.

A concatenated word is defined as a string that is comprised entirely of at least two shorter words (not necesssarily distinct) in the given array.

Input: words = ["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]
Output: ["catsdogcats","dogcatsdog","ratcatdogcat"]
Explanation: "catsdogcats" can be concatenated by "cats", "dog" and "cats"; 
"dogcatsdog" can be concatenated by "dog", "cats" and "dog"; 
"ratcatdogcat" can be concatenated by "rat", "cat", "dog" and "cat".

*/

export const findAllConcatenatedWordsInADict = (words: string[]) => {
  let result: string[] = [];
  let wordDict = new Set(words);
  let cache: Record<string, boolean> = {};

  let dfs = (index: number, word: string): boolean => {
    if (typeof cache[word] === "boolean") return cache[word];

    if (!word.length || index >= word.length) return (cache[word] = false);

    let prefix = word.slice(0, index + 1);
    let suffix = word.slice(index + 1);

    if (
      (wordDict.has(prefix) && wordDict.has(suffix)) ||
      (wordDict.has(prefix) && !wordDict.has(suffix) && dfs(0, suffix))
    )
      return (cache[word] = true);

    return dfs(index + 1, word);
  };

  for (let word of words) {
    if (dfs(0, word)) result.push(word);
  }

  return result;
};

console.log(
  findAllConcatenatedWordsInADict([
    "cat",
    "cats",
    "catsdogcats",
    "dog",
    "dogcatsdog",
    "hippopotamuses",
    "rat",
    "ratcatdogcat",
  ])
);

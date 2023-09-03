/*

Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.

Input: s = "applepenapple", wordDict = ["apple","pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
Note that you are allowed to reuse a dictionary word.

*/

class TireNode {
  constructor(
    public val: string | null = null,
    public isWord: boolean = false,
    public children: Record<string, TireNode> = {}
  ) {}
}

export const wordBreak = (s: string, wordDict: string[]) => {
  let cache: Record<string, boolean> = {};

  let dfs = (index: number) => {
    if (index >= s.length) return true;

    if (index in cache) return cache[index];

    for (let word of wordDict) {
      if (s.indexOf(word, index) !== index) continue;
      if (dfs(index + word.length)) {
        cache[s] = true;
        return true;
      }
    }

    cache[index] = false;

    return cache[index];
  };

  return dfs(0);
};

console.log(wordBreak("leetcode", ["leet", "code"]));

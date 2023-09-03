/*

Given a string s and a dictionary of strings wordDict, add spaces in s to construct a sentence where each word is a valid dictionary word. Return all such possible sentences in any order.

Note that the same word in the dictionary may be reused multiple times in the segmentation.

Input: s = "pineapplepenapple", wordDict = ["apple","pen","applepen","pine","pineapple"]
Output: ["pine apple pen apple","pineapple pen apple","pine applepen apple"]
Explanation: Note that you are allowed to reuse a dictionary word.

*/

export const wordBreak = (s: string, wordDict: string[]) => {
  let result: string[] = [];

  let dfs = (index: number, arr: string[]) => {
    if (index >= s.length) return result.push(arr.join(" "));

    for (let word of wordDict) {
      if (s.indexOf(word, index) !== index) continue;
      arr.push(word);
      dfs(index + word.length, arr);
      arr.pop();
    }
  };

  dfs(0, []);

  return result;
};

console.log(
  wordBreak("pineapplepenapple", [
    "apple",
    "pen",
    "applepen",
    "pine",
    "pineapple",
  ])
);

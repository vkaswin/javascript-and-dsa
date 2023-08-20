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
  let root = new TireNode();

  for (let word of wordDict) {
    let node = root;
    for (let char of word) {
      if (!node.children[char]) node.children[char] = new TireNode(char);
      node = node.children[char];
    }
    node.isWord = true;
  }

  let dp: boolean[] = new Array(s.length).fill(false);

  for (let i = 0; i < s.length; i++) {
    if (i == 0 || dp[i - 1]) {
      let node = root;
      for (let j = i; j < s.length; j++) {
        if (!node.children[s[j]]) {
          // No words exist
          break;
        }

        node = node.children[s[j]];
        if (node.isWord) {
          dp[j] = true;
        }
      }
    }
  }

  return dp[s.length - 1];
};

console.log(wordBreak("aaaaaaa", ["aaaa", "aaa"]));

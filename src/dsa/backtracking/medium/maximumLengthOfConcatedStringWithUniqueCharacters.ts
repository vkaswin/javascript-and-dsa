/*

You are given an array of strings arr. A string s is formed by the concatenation of a subsequence of arr that has unique characters.

Return the maximum possible length of s.

A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.

Input: arr = ["un","iq","ue"]
Output: 4
Explanation: All the valid concatenations are:
- ""
- "un"
- "iq"
- "ue"
- "uniq" ("un" + "iq")
- "ique" ("iq" + "ue")
Maximum length is 4.

*/

export const maxLength = (arr: string[]) => {
  let maxLen = 0;

  let dfs = (index: number, str: string) => {
    maxLen = Math.max(maxLen, str.length);

    if (index >= arr.length) return;

    for (let i = index; i < arr.length; i++) {
      let word = arr[i] + str;
      if (new Set(word).size !== word.length) continue;
      dfs(i + 1, arr[i] + str);
    }
  };

  dfs(0, "");

  return maxLen;
};

console.log(maxLength(["un", "iq", "ue"]));

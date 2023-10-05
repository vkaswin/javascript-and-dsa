/*

You are given an array of strings words. Each element of words consists of two lowercase English letters.

Create the longest possible palindrome by selecting some elements from words and concatenating them in any order. Each element can be selected at most once.

Return the length of the longest palindrome that you can create. If it is impossible to create any palindrome, return 0.

A palindrome is a string that reads the same forward and backward.

Input: words = ["ab","ty","yt","lc","cl","ab"]
Output: 8
Explanation: One longest palindrome is "ty" + "lc" + "cl" + "yt" = "tylcclyt", of length 8.
Note that "lcyttycl" is another longest palindrome that can be created.

*/

export const longestPalindrome = (words: string[]) => {
  let pairs = new Map<string, number>();
  let freq = new Map<string, number>();
  let maxLen = 0;
  let unpaired = 0;

  for (let word of words) {
    freq.set(word, (freq.get(word) || 0) + 1);
  }

  for (let [word, count] of freq) {
    let reverse = word[1] + word[0];

    if (word === reverse) {
      let rem = Math.floor(count / 2);
      if (rem) pairs.set(word, rem);
      if (count % 2) unpaired++;
    } else {
      let min = Math.min(count, freq.get(reverse)!);

      if (!min) continue;

      pairs.set(word, min);

      freq.set(word, count - min);
      freq.set(reverse, freq.get(reverse)! - min);
    }
  }

  for (let [_, count] of pairs) {
    maxLen += 4 * count;
  }

  if (unpaired) maxLen += 2;

  return maxLen;
};

// 26
console.log(
  longestPalindrome([
    "dd",
    "aa",
    "bb",
    "dd",
    "aa",
    "dd",
    "bb",
    "dd",
    "aa",
    "cc",
    "bb",
    "cc",
    "dd",
    "cc",
  ])
);

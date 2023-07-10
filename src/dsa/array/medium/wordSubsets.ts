/*

You are given two string arrays words1 and words2.

A string b is a subset of string a if every letter in b occurs in a including multiplicity.

For example, "wrr" is a subset of "warrior" but is not a subset of "world".
A string a from words1 is universal if for every string b in words2, b is a subset of a.

Return an array of all the universal strings in words1. You may return the answer in any order.

Input: words1 = ["amazon","apple","facebook","google","leetcode"], words2 = ["e","o"]
Output: ["facebook","google","leetcode"]

*/

export const wordSubsets = (words1: string[], words2: string[]) => {
  let results: string[] = [];

  let getFrequency = (word: string) => {
    let obj: Record<string, number> = {};

    for (let char of word) {
      obj[char] = (obj[char] || 0) + 1;
    }

    return obj;
  };

  let word1Freq: Record<string, Record<string, number>> = {};
  let word2Freq: Record<string, Record<string, number>> = {};

  for (let word of words1) {
    word1Freq[word] = getFrequency(word);
  }

  for (let word of words2) {
    word2Freq[word] = getFrequency(word);
  }

  let isSubset = (wordFreq: Record<string, number>) => {
    for (let word in word2Freq) {
      for (let char in word2Freq[word]) {
        if (!(char in wordFreq) || wordFreq[char] < word2Freq[word][char])
          return false;
      }
    }

    return true;
  };

  for (let word in word1Freq) {
    if (isSubset(word1Freq[word])) results.push(word);
  }

  return results;
};

console.log(
  wordSubsets(
    ["amazon", "apple", "facebook", "google", "leetcode"],
    ["e", "oo"]
  )
);

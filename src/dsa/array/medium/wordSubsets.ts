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
  let words1Freq: Record<string, Record<string, number>> = {};
  let words2Freq: Record<string, Record<string, number>> = {};

  let findFrequency = (
    words: string[],
    freqMap: Record<string, Record<string, number>>
  ) => {
    for (let word of words) {
      freqMap[word] = {};
      for (let char of word) {
        freqMap[word][char] = (freqMap[word][char] || 0) + 1;
      }
    }
  };

  findFrequency(words1, words1Freq);
  findFrequency(words2, words2Freq);

  let freq: Record<string, number> = {};

  for (let word in words2Freq) {
    let freqMap = words2Freq[word];
    for (let char in freqMap) {
      if (!freq[char]) freq[char] = freqMap[char];
      else freq[char] = Math.max(freqMap[char], freq[char]);
    }
  }

  let result: string[] = [];

  for (let word in words1Freq) {
    let wordFreq = words1Freq[word];
    let canAdd = true;
    for (let char in freq) {
      if (!wordFreq[char] || wordFreq[char] < freq[char]) {
        canAdd = false;
        break;
      }
    }
    if (canAdd) result.push(word);
  }

  return result;
};

console.log(
  wordSubsets(["acaac", "cccbb", "aacbb", "caacc", "bcbbb"], ["c", "cc", "b"])
);

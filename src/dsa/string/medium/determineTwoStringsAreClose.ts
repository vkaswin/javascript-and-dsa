/*

Two strings are considered close if you can attain one from the other using the following operations:

Operation 1: Swap any two existing characters.
For example, abcde -> aecdb
Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
You can use the operations on either string as many times as necessary.

Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.

Input: word1 = "abc", word2 = "bca"
Output: true
Explanation: You can attain word2 from word1 in 2 operations.
Apply Operation 1: "abc" -> "acb"
Apply Operation 1: "acb" -> "bca"

*/

export const closeStrings = (word1: string, word2: string) => {
  if (word1.length !== word2.length) return false;

  let getFreq = (word: string) => {
    let freq: Record<string, number> = {};
    for (let char of word) {
      freq[char] = (freq[char] || 0) + 1;
    }
    return freq;
  };

  let freq1 = getFreq(word1);
  let freq2 = getFreq(word2);

  for (let key in freq1) {
    if (!freq2[key]) return false;
  }

  for (let key in freq2) {
    if (!freq1[key]) return false;
  }

  let getCounter = (obj: Record<string, number>) => {
    let freq: Record<string, number> = {};

    for (let key in obj) {
      freq[obj[key]] = (freq[obj[key]] || 0) + 1;
    }

    return freq;
  };

  let obj1 = getCounter(freq1);
  let obj2 = getCounter(freq2);

  for (let key in obj1) {
    if (!obj2[key] || obj2[key] !== obj1[key]) return false;
  }

  for (let key in obj2) {
    if (!obj1[key] || obj1[key] !== obj2[key]) return false;
  }

  return true;
};

console.log(closeStrings("aaabbbbccddeeeeefffff", "aaaaabbcccdddeeeeffff"));

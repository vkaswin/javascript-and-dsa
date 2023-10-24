/*

Given a string array words, return the maximum value of length(word[i]) * length(word[j]) where the two words do not share common letters. If no such two words exist, return 0.

Input: words = ["abcw","baz","foo","bar","xtfn","abcdef"]
Output: 16
Explanation: The two words can be "abcw", "xtfn".

*/

export const maxProduct = (words: string[]) => {
  let wordsSet = words.map((word) => new Set(word));
  let maxLen = 0;

  let isUnique = (set1: Set<string>, set2: Set<string>) => {
    for (let char of set1) {
      if (set2.has(char)) return false;
    }
    return true;
  };

  for (let i = 0; i < words.length; i++) {
    for (let j = i; j < words.length; j++) {
      if (!isUnique(wordsSet[i], wordsSet[j])) continue;
      maxLen = Math.max(maxLen, words[i].length * words[j].length);
    }
  }

  return maxLen;
};

console.log(maxProduct(["abcw", "baz", "foo", "bar", "xtfn", "abcdef"]));

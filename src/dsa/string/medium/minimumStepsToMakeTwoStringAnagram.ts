/*

You are given two strings of the same length s and t. In one step you can choose any character of t and replace it with another character.

Return the minimum number of steps to make t an anagram of s.

An Anagram of a string is a string that contains the same characters with a different (or the same) ordering.

Input: s = "leetcode", t = "practice"
Output: 5
Explanation: Replace 'p', 'r', 'a', 'i' and 'c' from t with proper characters to make t anagram of s.

*/

export const minSteps = (s: string, t: string) => {
  let getFreq = (word: string) => {
    let freq: Record<string, number> = {};

    for (let char of word) {
      freq[char] = (freq[char] || 0) + 1;
    }

    return freq;
  };

  let freqS = getFreq(s);
  let freqT = getFreq(t);
  let steps = 0;

  for (let key in freqT) {
    if (!(key in freqS)) steps += freqT[key];
    else if (freqS[key] < freqT[key]) steps += freqT[key] - freqS[key];
  }

  return steps;
};

console.log(minSteps("leetcode", "practice"));

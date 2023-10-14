/*

You are given two strings s1 and s2 of equal length. A string swap is an operation where you choose two indices in a string (not necessarily different) and swap the characters at these indices.

Return true if it is possible to make both strings equal by performing at most one string swap on exactly one of the strings. Otherwise, return false.

Input: s1 = "bank", s2 = "kanb"
Output: true
Explanation: For example, swap the first character with the last character of s2 to make "bank".

*/

export const areAlmostEqual = (s1: string, s2: string) => {
  if (s1 === s2) return true;

  if (s1.length !== s2.length) return false;

  let getFreq = (word: string) => {
    let freq = new Map<string, number>();

    for (let char of word) {
      freq.set(char, (freq.get(char) || 0) + 1);
    }

    return freq;
  };

  let freq1 = getFreq(s1);
  let freq2 = getFreq(s2);

  for (let [char, count] of freq1) {
    if (!freq2.has(char) || freq2.get(char) !== count) return false;
  }

  let diff = 0;

  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) diff++;
    if (diff > 2) return false;
  }

  return true;
};

console.log(areAlmostEqual("bank", "kanb"));

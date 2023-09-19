/*

Given two strings s and goal, return true if you can swap two letters in s so the result is equal to goal, otherwise, return false.

Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j].

For example, swapping at indices 0 and 2 in "abcd" results in "cbad".

Input: s = "ab", goal = "ba"
Output: true
Explanation: You can swap s[0] = 'a' and s[1] = 'b' to get "ba", which is equal to goal.

*/

export const buddyStrings = (s: string, goal: string) => {
  if (s.length !== goal.length) return false;

  let hasDuplicates = false;

  let getFreq = (str: string, checkDuplicate: boolean = false) => {
    let freq: Record<string, number> = {};

    for (let char of str) {
      freq[char] = (freq[char] || 0) + 1;
      if (checkDuplicate && freq[char] >= 2 && !hasDuplicates)
        hasDuplicates = true;
    }

    return freq;
  };

  let freq1 = getFreq(s, true);
  let freq2 = getFreq(goal);

  for (let key in freq1) {
    if (!freq2[key] || freq2[key] !== freq1[key]) return false;
  }

  let diff = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) diff++;
    if (diff > 2) return false;
  }

  if (diff === 2) return true;

  if (diff === 0 && hasDuplicates) return true;

  return false;
};

console.log(buddyStrings("ab", "ba"));

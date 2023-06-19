/*

Given a string s, find the length of the longest substring without repeating characters.

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

*/

// sliding window
export const lengthOfLongestSubstring = (s: string) => {
  let len = 0;
  let set = new Set<string>();

  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      if (set.has(s[j])) {
        if (set.size > len) len = set.size;
        set.clear();
        break;
      }
      set.add(s[j]);
    }

    if (set.size) {
      if (set.size > len) len = set.size;
      set.clear();
    }
  }

  return len;
};

console.log(lengthOfLongestSubstring("dvdf"));

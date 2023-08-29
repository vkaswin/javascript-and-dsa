/*

Given a string s, find the length of the longest substring without repeating characters.

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

*/

export const lengthOfLongestSubstring = (s: string) => {
  let set = new Set<string>();
  let maxLength = 0;
  let left = 0;
  let right = 0;

  while (right < s.length) {
    if (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    } else {
      set.add(s[right]);
      maxLength = Math.max(maxLength, set.size);
      right++;
    }
  }

  return maxLength;
};

console.log(lengthOfLongestSubstring("pwwkew"));

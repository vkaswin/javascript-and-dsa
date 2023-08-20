/*

You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.

Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.

*/

export const characterReplacement = (s: string, k: number) => {
  let left = 0;
  let right = 0;
  let map = new Map<string, number>();
  let maxLength = 0;

  let getMaxLength = () => {
    let max = 0;
    for (let [key, value] of map) {
      max = Math.max(max, value);
    }
    return max;
  };

  while (right < s.length) {
    map.set(s[right], (map.get(s[right]) || 0) + 1);
    let max = getMaxLength();
    let strLen = right - left + 1;
    if (strLen - max <= k) {
      maxLength = Math.max(0, strLen);
    } else {
      map.set(s[left], map.get(s[left])! - 1);
      left++;
    }
    right++;
  }

  return maxLength;
};

console.log(characterReplacement("AABABBA", 1));

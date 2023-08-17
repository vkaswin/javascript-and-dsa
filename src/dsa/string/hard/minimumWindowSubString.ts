/*

Given two strings s and t of lengths m and n respectively, return the minimum window 
substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

*/

export const minWindow = (s: string, t: string) => {
  let freqT = new Map<string, number>();
  let freqS = new Map<string, number>();
  let left = 0;
  let right = 0;
  let count = 0;
  let start = -Infinity;
  let end = Infinity;

  for (let char of t) {
    freqT.set(char, (freqT.get(char) || 0) + 1);
  }

  while (right < s.length) {
    let char = s[right];
    freqS.set(char, (freqS.get(char) || 0) + 1);

    if (freqT.has(char) && freqT.get(char) === freqS.get(char)) count++;

    while (count === freqT.size) {
      freqS.set(s[left], freqS.get(s[left])! - 1);
      if (right - left < end - start) {
        start = left;
        end = right;
      }
      if (freqT.has(s[left]) && freqS.get(s[left])! < freqT.get(s[left])!)
        count--;
      left++;
    }

    right++;
  }

  return isFinite(start) && isFinite(end) ? s.slice(start, end + 1) : "";
};

console.log(minWindow("ADOBECODEBANC", "ABC"));

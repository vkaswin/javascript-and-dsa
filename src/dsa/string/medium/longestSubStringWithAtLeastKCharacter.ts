/*

Given a string s and an integer k, return the length of the longest substring of s such that the frequency of each character in this substring is greater than or equal to k.

Input: s = "ababbc", k = 2
Output: 5
Explanation: The longest substring is "ababb", as 'a' is repeated 2 times and 'b' is repeated 3 times.

*/

export const longestSubstring = (s: string, k: number) => {
  let longestSubStr = (start: number, end: number): number => {
    if (end < start) return 0;

    let freq: Record<string, number[]> = {};

    for (let i = start; i <= end; i++) {
      if (!freq[s[i]]) freq[s[i]] = [0, i];
      freq[s[i]][0]++;
    }

    let mid: number | null = null;

    for (let key in freq) {
      if (freq[key][0] >= k) continue;
      mid = freq[key][1];
      break;
    }

    if (mid === null) return end - start + 1;

    return Math.max(
      longestSubStr(start, mid! - 1),
      longestSubStr(mid! + 1, end)
    );
  };

  return longestSubStr(0, s.length - 1);
};

console.log(longestSubstring("a", 1));

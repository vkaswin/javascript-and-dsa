/*

Given a string s and an integer k, return the length of the longest substring of s such that the frequency of each character in this substring is greater than or equal to k.

Input: s = "ababbc", k = 2
Output: 5
Explanation: The longest substring is "ababb", as 'a' is repeated 2 times and 'b' is repeated 3 times.

*/

export const longestSubstring = (s: string, k: number) => {
  console.log(s, k);
};

console.log(longestSubstring("ababbc", 2));

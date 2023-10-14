/*

Given a binary string s, partition the string into one or more substrings such that each substring is beautiful.

A string is beautiful if:

It doesn't contain leading zeros.
It's the binary representation of a number that is a power of 5.
Return the minimum number of substrings in such partition. If it is impossible to partition the string s into beautiful substrings, return -1.

A substring is a contiguous sequence of characters in a string.

Input: s = "1011"
Output: 2
Explanation: We can paritition the given string into ["101", "1"].
- The string "101" does not contain leading zeros and is the binary representation of integer 51 = 5.
- The string "1" does not contain leading zeros and is the binary representation of integer 50 = 1.
It can be shown that 2 is the minimum number of beautiful substrings that s can be partitioned into.

*/

export const minimumBeautifulSubstrings = (s: string) => {
  let dp: number[] = [];

  let isPowerOf5 = (num: number) => {
    while (num > 1) {
      num /= 5;
    }

    return num === 1;
  };

  let dfs = (index: number) => {
    if (s[index] === "0") return Infinity;

    if (index >= s.length) return 0;

    if (dp[index] !== undefined) return dp[index];

    let min = Infinity;
    let str = "";

    for (let i = index; i < s.length; i++) {
      str += s[i];

      if (!isPowerOf5(parseInt(str, 2))) continue;

      min = Math.min(min, 1 + dfs(i + 1));
    }

    return (dp[index] = min);
  };

  let res = dfs(0);

  return res === Infinity ? -1 : res;
};

console.log(minimumBeautifulSubstrings("100111000110111"));

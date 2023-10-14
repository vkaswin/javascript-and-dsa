/*

You are given a string s consisting of digits from 1 to 9 and an integer k.

A partition of a string s is called good if:

Each digit of s is part of exactly one substring.
The value of each substring is less than or equal to k.
Return the minimum number of substrings in a good partition of s. If no good partition of s exists, return -1.

Note that:

The value of a string is its result when interpreted as an integer. For example, the value of "123" is 123 and the value of "1" is 1.
A substring is a contiguous sequence of characters within a string.

Input: s = "165462", k = 60
Output: 4
Explanation: We can partition the string into substrings "16", "54", "6", and "2". Each substring has a value less than or equal to k = 60.
It can be shown that we cannot partition the string into less than 4 substrings.

*/

export const minimumPartition = (s: string, k: number) => {
  let dp: number[] = [];

  let dfs = (index: number) => {
    if (index >= s.length) return 0;

    if (dp[index] !== undefined) return dp[index];

    let min = Infinity;
    let str = "";

    for (let i = index; i < s.length; i++) {
      str += s[i];

      if (+str > k) break;

      min = Math.min(min, 1 + dfs(i + 1));
    }

    return (dp[index] = min);
  };

  let res = dfs(0);

  return res === Infinity ? -1 : res;
};

console.log(minimumPartition("165462", 60));

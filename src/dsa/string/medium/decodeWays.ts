/*

A message containing letters from A-Z can be encoded into numbers using the following mapping:

'A' -> "1"
'B' -> "2"
...
'Z' -> "26"
To decode an encoded message, all the digits must be grouped then mapped back into letters using the reverse of the mapping above (there may be multiple ways). For example, "11106" can be mapped into:

"AAJF" with the grouping (1 1 10 6)
"KJF" with the grouping (11 10 6)
Note that the grouping (1 11 06) is invalid because "06" cannot be mapped into 'F' since "6" is different from "06".

Given a string s containing only digits, return the number of ways to decode it.

The test cases are generated so that the answer fits in a 32-bit integer.

Input: s = "12"
Output: 2
Explanation: "12" could be decoded as "AB" (1 2) or "L" (12).

*/

export const numDecodings = (s: string) => {
  let cache: Record<number, number> = {};

  let dfs = (index: number) => {
    if (s[index] === "0") return 0;

    if (index in cache) return cache[index];

    if (index >= s.length) return 1;

    let count = 0;

    count += dfs(index + 1);

    if (index + 1 < s.length && +(s[index] + s[index + 1]) <= 26)
      count += dfs(index + 2);

    cache[index] = count;

    return cache[index];
  };

  return dfs(0);
};

console.log(numDecodings("2266"));

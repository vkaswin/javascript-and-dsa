/*

You are given a list of strings of the same length words and a string target.

Your task is to form target using the given words under the following rules:

target should be formed from left to right.
To form the ith character (0-indexed) of target, you can choose the kth character of the jth string in words if target[i] = words[j][k].
Once you use the kth character of the jth string of words, you can no longer use the xth character of any string in words where x <= k. In other words, all characters to the left of or at index k become unusuable for every string.
Repeat the process until you form the string target.
Notice that you can use multiple characters from the same string in words provided the conditions above are met.

Return the number of ways to form target from words. Since the answer may be too large, return it modulo 109 + 7.

Input: words = ["acca","bbbb","caca"], target = "aba"
Output: 6
Explanation: There are 6 ways to form target.
"aba" -> index 0 ("acca"), index 1 ("bbbb"), index 3 ("caca")
"aba" -> index 0 ("acca"), index 2 ("bbbb"), index 3 ("caca")
"aba" -> index 0 ("acca"), index 1 ("bbbb"), index 3 ("acca")
"aba" -> index 0 ("acca"), index 2 ("bbbb"), index 3 ("acca")
"aba" -> index 1 ("caca"), index 2 ("bbbb"), index 3 ("acca")
"aba" -> index 1 ("caca"), index 2 ("bbbb"), index 3 ("caca")

*/

export const numWays = (words: string[], target: string) => {
  let len = words[0].length;

  if (len < target.length) return 0;

  let cache: Record<string, number> = {};
  let map: Record<string, number> = {};
  let mod = Math.pow(10, 9) + 7;

  for (let word of words) {
    for (let i = 0; i < word.length; i++) {
      let key = `${i},${word[i]}`;
      map[key] = (map[key] || 0) + 1;
    }
  }

  let dfs = (i: number, k: number) => {
    let key = `${i},${k}`;

    if (key in cache) return cache[key];

    if (i >= target.length) return Number(i === target.length);

    let count = 0;

    for (let j = k; j < len; j++) {
      let key = `${j},${target[i]}`;
      if (!(key in map)) continue;
      count += map[key] * dfs(i + 1, j + 1);
    }

    return (cache[key] = count % mod);
  };

  return dfs(0, 0);
};

console.log(numWays(["acca", "bbbb", "caca"], "aba"));

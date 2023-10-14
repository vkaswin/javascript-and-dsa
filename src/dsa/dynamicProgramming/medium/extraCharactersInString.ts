/*

You are given a 0-indexed string s and a dictionary of words dictionary. You have to break s into one or more non-overlapping substrings such that each substring is present in dictionary. There may be some extra characters in s which are not present in any of the substrings.

Return the minimum number of extra characters left over if you break up s optimally.

Input: s = "sayhelloworld", dictionary = ["hello","world"]
Output: 3
Explanation: We can break s in two substrings: "hello" from index 3 to 7 and "world" from index 8 to 12. The characters at indices 0, 1, 2 are not used in any substring and thus are considered as extra characters. Hence, we return 3.

*/

export const minExtraChar = (s: string, dictionary: string[]) => {
  let dp: number[] = [];

  let dfs = (index: number): number => {
    if (index >= s.length) return 0;

    if (dp[index] !== undefined) return dp[index];

    let min = Infinity;

    for (let word of dictionary) {
      if (s.indexOf(word, index) === index)
        min = Math.min(min, dfs(index + word.length));
      else min = Math.min(min, 1 + dfs(index + 1));
    }

    return (dp[index] = min);
  };

  return dfs(0);
};

console.log(minExtraChar("sayhelloworld", ["hello", "world"]));

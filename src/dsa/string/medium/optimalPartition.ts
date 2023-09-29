/*

Given a string s, partition the string into one or more substrings such that the characters in each substring are unique. That is, no letter appears in a single substring more than once.

Return the minimum number of substrings in such a partition.

Note that each character should belong to exactly one substring in a partition.

Input: s = "abacaba"
Output: 4
Explanation:
Two possible partitions are ("a","ba","cab","a") and ("ab","a","ca","ba").
It can be shown that 4 is the minimum number of substrings needed.

*/

export const partitionString = (s: string) => {
  let set = new Set();
  let count = 0;
  let index = 0;

  while (index < s.length) {
    if (set.has(s[index])) {
      count++;
      set = new Set();
    } else {
      set.add(s[index]);
      index++;
    }
  }

  return count + 1;
};

console.log(partitionString("abacaba"));

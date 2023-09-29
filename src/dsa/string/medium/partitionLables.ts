/*

You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part.

Note that the partition is done so that after concatenating all the parts in order, the resultant string should be s.

Return a list of integers representing the size of these parts.

Input: s = "ababcbacadefegdehijhklij"
Output: [9,7,8]
Explanation:
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.


*/

const partitionLabels = (s: string) => {
  let map: Record<string, number> = {};

  for (let i = 0; i < s.length; i++) {
    map[s[i]] = i;
  }

  let start = 0;
  let end = map[s[start]];
  let partition: number[] = [];

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] > end) end = map[s[i]];

    if (i === end) {
      partition.push(end - start + 1);
      start = end + 1;
      end = map[s[start]];
    }
  }

  return partition;
};

console.log(partitionLabels("eccbbbbdec"));

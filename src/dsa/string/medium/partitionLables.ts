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
  let lastSeenIndices: Record<string, number> = {};

  for (let i = s.length - 1; i >= 0; i--) {
    let char = s[i];

    if (!lastSeenIndices[char]) {
      lastSeenIndices[char] = i;
    }
  }

  let partitions = [];
  let start = 0;
  let end = 0;

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    let lastCharIdx = lastSeenIndices[char];

    if (lastCharIdx > end) end = lastCharIdx;

    if (i === end) {
      let partition = end - start + 1;
      partitions.push(partition);
      start = i + 1;
    }
  }

  return partitions;
};

console.log(partitionLabels("ababcbacadefegdehijhklij"));

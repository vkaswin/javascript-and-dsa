/*

The DNA sequence is composed of a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T'.

For example, "ACGAATTCCG" is a DNA sequence.
When studying DNA, it is useful to identify repeated sequences within the DNA.

Given a string s that represents a DNA sequence, return all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule. You may return the answer in any order.

Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
Output: ["AAAAACCCCC","CCCCCAAAAA"]

*/

export const findRepeatedDnaSequences = (s: string) => {
  let map: Record<string, number> = {};
  let queue: string[] = [];
  let result: string[] = [];

  for (let char of s) {
    queue.push(char);
    if (queue.length === 10) {
      let str = queue.join("");
      map[str] = (map[str] || 0) + 1;
      queue.shift();
    }
  }

  for (let key in map) {
    if (map[key] > 1) result.push(key);
  }

  return result;
};

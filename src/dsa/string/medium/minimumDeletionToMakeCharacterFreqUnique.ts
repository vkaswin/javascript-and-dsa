/*

A string s is called good if there are no two different characters in s that have the same frequency.

Given a string s, return the minimum number of characters you need to delete to make s good.

The frequency of a character in a string is the number of times it appears in the string. For example, in the string "aab", the frequency of 'a' is 2, while the frequency of 'b' is 1.

Input: s = "aaabbbcc"
Output: 2
Explanation: You can delete two 'b's resulting in the good string "aaabcc".
Another way it to delete one 'b' and one 'c' resulting in the good string "aaabbc".

*/

export const minDeletions = (s: string) => {
  let freq = new Map<string, number>();
  let count = new Map<number, number>();
  let minCount = 0;

  for (let char of s) {
    freq.set(char, (freq.get(char) || 0) + 1);
  }

  for (let [_, val] of freq) {
    count.set(val, (count.get(val) || 0) + 1);
  }

  let isUnique = () => {
    for (let [key, val] of freq) {
      if (count.get(val)! === 1) continue;

      count.set(val, count.get(val)! - 1);
      if (!count.has(val - 1)) count.set(val - 1, 0);

      count.set(val - 1, (count.get(val - 1) || 0) + 1);
      if (count.get(val) === 0) count.delete(val);

      freq.set(key, freq.get(key)! - 1);
      if (freq.get(key) === 0) freq.delete(key);

      return false;
    }

    return true;
  };

  while (!isUnique()) minCount++;

  return minCount;
};

console.log(minDeletions("aaabbbcc"));
// "ceabaacb"

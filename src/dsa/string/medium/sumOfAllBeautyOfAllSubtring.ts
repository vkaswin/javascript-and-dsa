/*

The beauty of a string is the difference in frequencies between the most frequent and least frequent characters.

For example, the beauty of "abaacc" is 3 - 1 = 2.
Given a string s, return the sum of beauty of all of its substrings.

Input: s = "aabcb"
Output: 5
Explanation: The substrings with non-zero beauty are ["aab","aabc","aabcb","abcb","bcb"], each with beauty equal to 1.

*/

export const beautySum = (s: string) => {
  let freq = new Map<string, number>();
  let sum = 0;

  let findSum = () => {
    let max = -Infinity;
    let min = Infinity;

    for (let [_, count] of freq) {
      max = Math.max(max, count);
      min = Math.min(min, count);
    }

    return max - min;
  };

  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      freq.set(s[j], (freq.get(s[j]) || 0) + 1);
      if (freq.size > 1) sum += findSum();
    }
    freq.clear();
  }

  return sum;
};

console.log(beautySum("aabcbaa"));

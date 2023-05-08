/*

You are given a string array words and a string s, where words[i] and s comprise only 
of lowercase English letters.
Return the number of strings in words that are a prefix of s.
A prefix of a string is a substring that occurs at the beginning of the string. 
A substring is a contiguous sequence of characters within a string.

Input: words = ["a","b","c","ab","bc","abc"], s = "abc"
Output: 3
Explanation:
The strings in words which are a prefix of s = "abc" are:
"a", "ab", and "abc".
Thus the number of strings in words which are a prefix of s is 3.

*/

export const countPrefixes = (words: string[], s: string) => {
  let count = 0;

  for (let i = 0; i < words.length; i++) {
    if (s.startsWith(words[i])) count++;
  }

  return count;
};

console.log(
  countPrefixes(
    [
      "feh",
      "w",
      "w",
      "lwd",
      "c",
      "s",
      "vk",
      "zwlv",
      "n",
      "w",
      "sw",
      "qrd",
      "w",
      "w",
      "mqe",
      "w",
      "w",
      "w",
      "gb",
      "w",
      "qy",
      "xs",
      "br",
      "w",
      "rypg",
      "wh",
      "g",
      "w",
      "w",
      "fh",
      "w",
      "w",
      "sccy",
    ],
    "w"
  )
);

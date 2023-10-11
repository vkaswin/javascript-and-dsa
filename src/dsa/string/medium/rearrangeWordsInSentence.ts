/*

Given a sentence text (A sentence is a string of space-separated words) in the following format:

First letter is in upper case.
Each word in text are separated by a single space.
Your task is to rearrange the words in text such that all words are rearranged in an increasing order of their lengths. If two words have the same length, arrange them in their original order.

Return the new text following the format shown above.

Input: text = "Leetcode is cool"
Output: "Is cool leetcode"
Explanation: There are 3 words, "Leetcode" of length 8, "is" of length 2 and "cool" of length 4.
Output is ordered by length and the new first word starts with capital letter.

*/

export const arrangeWords = (text: string) => {
  let words = text
    .split(" ")
    .sort((a, b) => {
      if (a.length !== b.length) return a.length - b.length;
      return 0;
    })
    .map((word) => word.toLowerCase());

  words[0] = words[0][0].toUpperCase() + words[0].slice(1);

  return words.join(" ");
};

console.log(arrangeWords("Leetcode is cool"));

/*

Given an array of string words, return all strings in words that is a substring of another word. You can return the answer in any order.

A substring is a contiguous sequence of characters within a string

Input: words = ["mass","as","hero","superhero"]
Output: ["as","hero"]
Explanation: "as" is substring of "mass" and "hero" is substring of "superhero".
["hero","as"] is also a valid answer.

*/

export const stringMatching = (words: string[]) => {
  return words.filter((word, i) => {
    return words.some((str, j) => {
      if (i === j) return false;
      return str.includes(word);
    });
  });
};

console.log(stringMatching(["mass", "as", "hero", "superhero"]));

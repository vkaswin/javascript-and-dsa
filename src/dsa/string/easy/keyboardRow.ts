/*

Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.

In the American keyboard:

the first row consists of the characters "qwertyuiop",
the second row consists of the characters "asdfghjkl", and
the third row consists of the characters "zxcvbnm".

Input: words = ["Hello","Alaska","Dad","Peace"]
Output: ["Alaska","Dad"]

*/

export const findWords = (words: string[]) => {
  let rows = [new Set("qwertyuiop"), new Set("asdfghjkl"), new Set("zxcvbnm")];

  return words.filter((word) => {
    let arr = word.toLowerCase().split("");
    return rows.some((row) => arr.every((char) => row.has(char)));
  });
};

console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]));

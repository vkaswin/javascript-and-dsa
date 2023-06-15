/*

You are given an array of characters letters that is sorted in non-decreasing order, and a 
character target. There are at least two different characters in letters.
Return the smallest character in letters that is lexicographically greater than target. 
If such a character does not exist, return the first character in letters.

Input: letters = ["c","f","j"], target = "a"
Output: "c"
Explanation: The smallest character that is lexicographically greater than 'a' in letters is 'c'.

*/

export const nextGreatestLetter = (letters: string[], target: string) => {
  let targretCharCode = target.toLocaleLowerCase().charCodeAt(0);

  for (let i = 0; i < letters.length; i++) {
    if (letters[i].charCodeAt(0) > targretCharCode) return letters[i];
  }

  return letters[0];
};

console.log(nextGreatestLetter(["c", "f", "j"], "d"));

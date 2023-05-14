/*

Given a string s, reverse only all the vowels in the string and return it.
The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and 
upper cases, more than once.

Input: s = "leetcode"
Output: "leotcede"

Input: s = "hello"
Output: "holle"

*/

export const reverseVowels = (s: string) => {
  let vowels = new Set("aeiouAEIOU");
  let temp: string[] = [...s].filter((char) => vowels.has(char));
  let str = "";

  for (let i = 0; i < s.length; i++) {
    str += vowels.has(s[i]) ? (temp.pop() as string) : s[i];
  }

  return str;
};

console.log(reverseVowels("hello"));

/*

You are given a 0-indexed array of string words and two integers left and right.
A string is called a vowel string if it starts with a vowel character and ends with a 
vowel character where vowel characters are 'a', 'e', 'i', 'o', and 'u'.
Return the number of vowel strings words[i] where i belongs to the inclusive range [left, right].

Input: words = ["hey","aeo","mu","ooo","artro"], left = 1, right = 4
Output: 3
Explanation: 
- "aeo" is a vowel string because it starts with 'a' and ends with 'o'.
- "mu" is not a vowel string because it does not start with a vowel.
- "ooo" is a vowel string because it starts with 'o' and ends with 'o'.
- "artro" is a vowel string because it starts with 'a' and ends with 'o'.
The number of vowel strings in the mentioned range is 3.

*/

export const vowelStrings = (words: string[], left: number, right: number) => {
  let vowels = new Set("aeiou");
  let count = 0;

  for (let i = left; i <= right; i++) {
    let str = words[i];
    if (vowels.has(str[0]) && vowels.has(str[str.length - 1])) count++;
  }

  return count;
};

console.log(vowelStrings(["hey", "aeo", "mu", "ooo", "artro"], 1, 4));

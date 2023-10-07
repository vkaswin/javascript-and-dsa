/*

A fancy string is a string where no three consecutive characters are equal.

Given a string s, delete the minimum possible number of characters from s to make it fancy.

Return the final string after the deletion. It can be shown that the answer will always be unique.

Input: s = "aaabaaaa"
Output: "aabaa"
Explanation:
Remove an 'a' from the first group of 'a's to create "aabaaaa".
Remove two 'a's from the second group of 'a's to create "aabaa".
No three consecutive characters are equal, so return "aabaa".

*/

export const makeFancyString = (s: string) => {
  let stack: string[] = [];

  for (let char of s) {
    if (stack.length > 1 && char === stack.at(-1) && char === stack.at(-2))
      continue;

    stack.push(char);
  }

  return stack.join("");
};

console.log(makeFancyString("aaabaaaa"));

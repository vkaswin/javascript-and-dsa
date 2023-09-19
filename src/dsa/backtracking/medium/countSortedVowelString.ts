/*

Given an integer n, return the number of strings of length n that consist only of vowels (a, e, i, o, u) and are lexicographically sorted.

A string s is lexicographically sorted if for all valid i, s[i] is the same as or comes before s[i+1] in the alphabet.

Input: n = 2
Output: 15
Explanation: The 15 sorted strings that consist of vowels only are
["aa","ae","ai","ao","au","ee","ei","eo","eu","ii","io","iu","oo","ou","uu"].
Note that "ea" is not a valid string since 'e' comes after 'a' in the alphabet.

*/

export const countVowelStrings = (n: number) => {
  let vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  let backtrack = (index: number, arr: string[]) => {
    if (arr.length === n) {
      count++;
      return;
    }

    for (let i = index; i < vowels.length; i++) {
      arr.push(vowels[i]);
      backtrack(i, arr);
      arr.pop();
    }
  };

  backtrack(0, []);

  return count;
};

console.log(countVowelStrings(2));

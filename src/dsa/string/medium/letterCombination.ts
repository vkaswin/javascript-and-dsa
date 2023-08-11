/*

Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

*/

export const letterCombinations = (digits: string) => {
  let map: Record<string, string> = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  let result: string[] = [];

  if (!digits.length) return result;

  let recurse = (i: number, str: string) => {
    if (i === digits.length) return result.push(str);

    for (let char of map[digits[i]]) {
      recurse(i + 1, str + char);
    }
  };

  recurse(0, "");

  return result;
};

console.log(letterCombinations("234"));

/*

Given a string s, you can transform every letter individually to be lowercase or uppercase to create another string.

Return a list of all possible strings we could create. Return the output in any order.

Input: s = "a1b2"
Output: ["a1b2","a1B2","A1b2","A1B2"]
*/

export const letterCasePermutation = (s: string) => {
  let result: string[] = [];
  let numbers = new Set("0123456789");

  let backtrack = (index: number, arr: string[]) => {
    if (arr.length === s.length) {
      result.push(arr.join(""));
      return;
    }

    for (let i = index; i < s.length; i++) {
      if (numbers.has(s[i])) {
        arr.push(s[i]);
        backtrack(i + 1, arr);
        arr.pop();
      } else {
        for (let j = 0; j < 2; j++) {
          arr.push(j === 0 ? s[i].toLowerCase() : s[i].toUpperCase());
          backtrack(i + 1, arr);
          arr.pop();
        }
      }
    }
  };

  backtrack(0, []);

  return result;
};

console.log(letterCasePermutation("a1b2"));

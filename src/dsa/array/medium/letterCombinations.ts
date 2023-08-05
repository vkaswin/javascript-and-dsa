export const letterCombinations = (digits: string) => {
  let map: Record<string, string> = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz",
  };

  let arr: string[] = [];
  let strs: string[] = [];

  for (let i = 0; i < digits.length; i++) {
    strs.push(map[digits[i]]);
  }

  for (let i = 0; i < 3; i++) {
    let str = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      str += strs[j][i];
    }
    arr.push(str);
  }

  return arr;
};

console.log(letterCombinations("23"));

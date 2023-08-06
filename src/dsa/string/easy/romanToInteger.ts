/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

I             1
V             5
X             10
L             50
C             100
D             500
M             1000
*/

let romanLetters: Record<string, number> = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
export const romanToInteger = (roman: string) => {
  let num = 0;

  for (let i = 0; i < roman.length; i++) {
    let curr = romanLetters[roman[i]];
    let next = romanLetters[roman[i + 1]];
    if (next > curr) num -= curr;
    else num += curr;
  }

  return num;
};

console.log(romanToInteger("MCMXCIV"));

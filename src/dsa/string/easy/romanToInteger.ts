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

let romanLetter: Record<string, number> = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

export const romanToInteger = (roman: string) => {
  if (roman.length === 0) return;

  let integer: number = 0;

  for (let i = 0; i < roman.length; i++) {
    integer += romanLetter[roman[i]];
  }

  return integer;
};

console.log(romanToInteger("MCMXCIV"));

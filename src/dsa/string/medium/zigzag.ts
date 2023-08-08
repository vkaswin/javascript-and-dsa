/*

The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: 
(you may want to display this pattern in a fixed font for better legibility)
P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I 

*/

export const convert = (s: string, numRows: number) => {
  if (numRows === 1) return s;

  let result: string[] = new Array(numRows).fill("");
  let isDown = true;
  let rows = numRows - 1;
  let i = 0;

  for (let char of s) {
    result[i] += char;

    isDown ? i++ : i--;

    if (i === 0) isDown = true;

    if (i === rows) isDown = false;
  }

  return result.reduce((curr, arr) => curr + arr, "");
};

console.log(convert("PAYPALISHIRING", 3));

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
  console.log(numRows);
  for (let i = 0; i < s.length; i++) {
    // console.log(s[i]);
  }
};

console.log(convert("PAYPALISHIRING", 3));

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

  let len = s.length;
  let index = 0;
  let columns: string[][] = [];

  while (index < len) {
    let strs: string[] = [];

    for (let i = 0, j = numRows - 1; i < numRows && index < len; i++, j--) {
      strs[j] = s[index];
      index++;
    }

    columns.push(strs);

    for (let i = numRows - 2; i > 0 && index < len; i--) {
      let strs = new Array(i + 1);
      strs[strs.length - i - 1] = s[index];
      columns.push(strs);
      index++;
    }
  }

  let str = "";

  while (str.length < len) {
    for (let column of columns) {
      if (column.length === 0) continue;
      let val = column.pop();
      if (val !== undefined) str += val;
    }
  }

  return str;
};

console.log(convert("PAYPALISHIRING", 4));

/*

You are given an array of n strings strs, all of the same length.

The strings can be arranged such that there is one on each line, making a grid.

For example, strs = ["abc", "bce", "cae"] can be arranged as follows:
abc
bce
cae
You want to delete the columns that are not sorted lexicographically. In the above example (0-indexed), columns 0 ('a', 'b', 'c') and 2 ('c', 'e', 'e') are sorted, while column 1 ('b', 'c', 'a') is not, so you would delete column 1.

Return the number of columns that you will delete.

Input: strs = ["cba","daf","ghi"]
Output: 1
Explanation: The grid looks as follows:
  cba
  daf
  ghi
Columns 0 and 2 are sorted, but column 1 is not, so you only need to delete 1 column.

*/

export const minDeletionSize = (strs: string[]) => {
  let row = strs.length;
  let col = strs[0].length;
  let j = 0;
  let count = 0;

  while (j < col) {
    for (let i = 1; i < row; i++) {
      if (strs[i][j] >= strs[i - 1][j]) continue;
      count++;
      break;
    }
    j++;
  }

  return count;
};

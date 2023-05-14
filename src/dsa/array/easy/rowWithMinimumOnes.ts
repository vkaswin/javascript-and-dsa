/*

Given a m x n binary matrix mat, find the 0-indexed position of the row that contains the 
maximum count of ones, and the number of ones in that row.
In case there are multiple rows that have the maximum count of ones, the row with the smallest 
row number should be selected.
Return an array containing the index of the row, and the number of ones in it.

Input: mat = [[0,1],[1,0]]
Output: [0,1]
Explanation: Both rows have the same number of 1's. So we return the index of the smaller row, 0, and the maximum count of ones (1). So, the answer is [0,1]. 

Input: mat = [[0,0],[1,1],[0,0]]
Output: [1,2]
Explanation: The row indexed 1 has the maximum count of ones (2). So the answer is [1,2].

*/

const rowAndMaximumOnes = (mat: number[][]) => {
  let count = 0;
  let index = 0;
  let row = mat.length;
  let column = mat[0].length;

  for (let i = 0; i < row; i++) {
    let max = 0;
    for (let j = 0; j < column; j++) {
      if (mat[i][j] === 1) max++;
    }
    if (max > count) {
      index = i;
      count = max;
    }
  }

  return [index, count];
};

console.log(
  rowAndMaximumOnes([
    [0, 0],
    [1, 1],
    [0, 0],
  ])
);

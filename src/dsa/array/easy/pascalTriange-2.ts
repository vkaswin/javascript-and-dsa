/*

Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

Input: rowIndex = 3
Output: [1,3,3,1]

*/

export const getRow = (rowIndex: number) => {
  if (rowIndex === 0) return [1];

  if (rowIndex === 1) return [1, 1];

  let prev = [1, 1];

  for (let i = 2; i <= rowIndex; i++) {
    let left = 0;
    let right = 1;
    let curr: number[] = [1];

    while (right < prev.length) {
      curr[right] = prev[left++] + prev[right++];
    }

    curr.push(1);
    prev = curr;
  }

  return prev;
};

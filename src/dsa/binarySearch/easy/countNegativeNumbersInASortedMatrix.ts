/*

Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.

Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
Output: 8
Explanation: There are 8 negatives number in the matrix.

*/

export const countNegatives = (grid: number[][]) => {
  let countNumbers = (arr: number[]) => {
    if (arr.at(0)! < 0) return arr.length;
    if (arr.at(-1)! > 0) return 0;

    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (arr[mid] >= 0) left = mid + 1;
      else right = mid - 1;
    }

    return arr.length - left;
  };

  return grid.reduce((acc, curr) => acc + countNumbers(curr), 0);
};

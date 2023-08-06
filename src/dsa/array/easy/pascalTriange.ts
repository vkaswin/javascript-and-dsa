/*

Given an integer numRows, return the first numRows of Pascal's triangle.

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

*/

export const generate = (numRows: number) => {
  let result: number[][] = [];

  if (numRows === 0) return result;
  if (numRows >= 1) result.push([1]);
  if (numRows >= 2) result.push([1, 1]);

  for (let i = 2; i < numRows; i++) {
    let left = 0;
    let right = 1;
    let nums: number[] = [1];
    let prev = result[i - 1];

    while (right < prev.length) {
      nums[right] = prev[left++] + prev[right++];
    }

    nums.push(1);
    result.push(nums);
  }

  return result;
};

console.log(generate(5));

/*

Given a 2D integer array nums, return all elements of nums in diagonal order as shown in the below images.

Input: nums = [[1,2,3,4,5],[6,7],[8],[9,10,11],[12,13,14,15,16]]
Output: [1,6,2,8,7,3,9,4,12,10,5,13,11,14,15,16]

*/

export const findDiagonalOrder = (nums: number[][]) => {
  let obj: Record<string, number[]> = {};
  let row = nums.length;
  let col = nums.reduce(
    (acc, curr) => (curr.length > acc ? curr.length : acc),
    0
  );

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (nums[i][j] === undefined) break;
      let key = i + j;
      if (obj[key]) {
        obj[key].push(nums[i][j]);
      } else {
        obj[key] = [nums[i][j]];
      }
    }
  }

  let result = Object.values(obj);
  result.forEach((arr) => arr.reverse());

  return result.flat();
};

console.log(
  findDiagonalOrder([
    [1, 2, 3, 4, 5],
    [6, 7],
    [8],
    [9, 10, 11],
    [12, 13, 14, 15, 16],
  ])
);

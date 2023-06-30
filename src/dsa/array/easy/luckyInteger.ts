/*

Given an array of integers arr, a lucky integer is an integer that has a frequency in the array equal to its value.

Return the largest lucky integer in the array. If there is no lucky integer return -1.

Input: arr = [1,2,2,3,3,3]
Output: 3
Explanation: 1, 2 and 3 are all lucky numbers, return the largest of them.

*/

export const findLucky = (arr: number[]) => {
  let obj: Record<number, number> = {};

  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = (obj[arr[i]] || 0) + 1;
  }

  let max = -1;

  for (let key in obj) {
    if (+key === obj[key] && +key > max) max = +key;
  }

  return max;
};

console.log(findLucky([1, 2, 2, 3, 3, 3]));

/*

Given an array of integers arr, return true if and only if it is a valid mountain array.

Recall that arr is a mountain array if and only if:

arr.length >= 3
There exists some i with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... < arr[i - 1] < arr[i] 
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

Input: arr = [0,3,2,1]
Output: true

*/

export const validMountainArray = (arr: number[]) => {
  if (arr.length < 3) return false;

  let i = 0;
  let j = arr.length - 1;

  while (i < arr.length - 1 && arr[i] < arr[i + 1]) i++;

  if (i === arr.length - 1) return false;

  while (j > 0 && arr[j - 1] > arr[j]) j--;

  if (j === 0) return false;

  return i === j;
};

console.log(validMountainArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));

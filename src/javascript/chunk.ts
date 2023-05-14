/*

Given an array arr and a chunk size size, return a chunked array. 
A chunked array contains the original elements in arr, but consists of subarrays each of length size. 
The length of the last subarray may be less than size if arr.length is not evenly divisible by size.
You may assume the array is the output of JSON.parse. In other words, it is valid JSON.
Please solve it without using lodash's _.chunk function.

Input: arr = [1,2,3,4,5], size = 1
Output: [[1],[2],[3],[4],[5]]
Explanation: The arr has been split into subarrays each with 1 element.

*/

export const chunk = (arr: any[], size: number) => {
  let currentArr = [];
  let result: any[][] = [];

  for (let i = 0; i < arr.length; i++) {
    currentArr.push(arr[i]);
    if (currentArr.length === size) {
      result.push(currentArr);
      currentArr = [];
    }
  }

  if (currentArr.length > 0) result.push(currentArr);

  return result;
};

export const alternative = (arr: any[], size: number) => {
  let result: any[][] = [];

  for (let i = 0; i <= Math.floor(arr.length / size); i++) {
    let temp: any[] = [];
    for (
      let j = i * size, x = 0;
      j < arr.length && j < i * size + size;
      j++, x++
    ) {
      temp[x] = arr[j];
    }
    if (temp.length > 0) result.push(temp);
  }

  return result;
};

console.log(chunk([1, 9, 6, 3, 2], 4));

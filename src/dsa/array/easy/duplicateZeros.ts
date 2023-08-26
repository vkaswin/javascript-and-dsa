/*

Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.

Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.

Input: arr = [1,0,2,3,0,4,5,0]
Output: [1,0,0,2,3,0,0,4]
Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]

*/

export const duplicateZeros = (arr: number[]) => {
  let temp = [];

  for (let val of arr) {
    if (val === 0) temp.push(0);
    temp.push(val);
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i] = temp[i];
  }
};

console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]));

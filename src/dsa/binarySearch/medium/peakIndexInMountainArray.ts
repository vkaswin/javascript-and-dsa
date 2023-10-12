/*

An array arr is a mountain if the following properties hold:

arr.length >= 3
There exists some i with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... < arr[i - 1] < arr[i] 
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
Given a mountain array arr, return the index i such that arr[0] < arr[1] < ... < arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1].

You must solve it in O(log(arr.length)) time complexity.

Input: arr = [0,2,1,0]
Output: 1

*/

export const peakIndexInMountainArray = (arr: number[]) => {
  let left = 0;
  let index = left;
  let right = arr.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] < arr[mid + 1]) {
      left = mid + 1;
      index = left;
    } else {
      right = mid;
    }
  }

  return index;
};

console.log(peakIndexInMountainArray([0, 2, 1, 0]));

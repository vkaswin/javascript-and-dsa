/*

Given an array of integers arr, replace each element with its rank.

The rank represents how large the element is. The rank has the following rules:

Rank is an integer starting from 1.
The larger the element, the larger the rank. If two elements are equal, their rank must be the same.
Rank should be as small as possible.

Input: arr = [37,12,28,9,100,56,80,5,12]
Output: [5,3,4,2,8,6,7,1,3]

*/

export const arrayRankTransform = (arr: number[]) => {
  let map: Record<string, number> = {};
  let result: number[] = [];

  let sorted = [...new Set(arr)].sort((a, b) => a - b);

  for (let i = 0; i < sorted.length; i++) {
    map[sorted[i]] = i + 1;
  }

  for (let i = 0; i < arr.length; i++) {
    result[i] = map[arr[i]];
  }

  return result;
};

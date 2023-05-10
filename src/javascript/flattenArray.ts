/*

Given a multi-dimensional array arr and a depth n, return a flattened version of that array.

A multi-dimensional array is a recursive data structure that contains integers or other multi-dimensional arrays.

A flattened array is a version of that array with some or all of the sub-arrays removed and replaced with the actual elements in that sub-array. This flattening operation should only be done if the current depth of nesting is less than n. The depth of the elements in the first array are considered to be 0.

Please solve it without the built-in Array.flat method.

Input
arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
n = 1
Output
[1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]

Explanation
The subarrays starting with 4, 7, and 13 are all flattened. This is because their depth of 0 is less than 1. However [9, 10, 11] remains unflattened because its depth is 1.

*/

type MultiDimensionalArray = (number | MultiDimensionalArray)[];

export const flat = (arr: MultiDimensionalArray, n: number = 1) => {
  let result: MultiDimensionalArray = [];

  if (n === 0) return arr;

  let getFlattenArray = (arr: MultiDimensionalArray, depth: number) => {
    arr.forEach((num) => {
      if (Array.isArray(num) && depth <= n) getFlattenArray(num, depth + 1);
      else result.push(num);
    });
  };

  getFlattenArray(arr, 1);

  return result;
};

console.log(
  flat([
    1,
    2,
    3,
    [4, 5, 6],
    [7, 8, [9, 10, 11], 12],
    [13, [4, [5, 6, [34, 5, [6]]]], 15],
  ])
);

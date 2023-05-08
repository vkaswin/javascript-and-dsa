/*

Given an array of integers arr, return true if the number of occurrences of each value in the 
array is unique or false otherwise.

Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.

*/

const uniqueOccurences = (arr: number[]) => {
  let obj: Record<number, number> = {};

  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = (obj[arr[i]] || 0) + 1;
  }

  let values = Object.values(obj);
  let set = new Set(Object.values(obj));

  return values.length === set.size;
};

console.log(uniqueOccurences([1, 2, 2, 1, 1, 3]));

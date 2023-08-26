/* 

Given an array arr of integers, check if there exist two indices i and j such that :arr[i] == 2 * arr[j]

Input: arr = [10,2,5,3]
Output: true
Explanation: For i = 0 and j = 2, arr[i] == 10 == 2 * 5 == 2 * arr[j]

*/

export const checkIfExist = (arr: number[]) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === 2 * arr[j] || arr[j] === 2 * arr[i]) return true;
    }
  }

  return false;
};

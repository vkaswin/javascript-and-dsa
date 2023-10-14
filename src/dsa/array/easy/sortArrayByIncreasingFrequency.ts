/*

Given an array of integers nums, sort the array in increasing order based on the frequency of the values. If multiple values have the same frequency, sort them in decreasing order.

Return the sorted array.

Input: nums = [1,1,2,2,2,3]
Output: [3,1,1,2,2,2]
Explanation: '3' has a frequency of 1, '1' has a frequency of 2, and '2' has a frequency of 3.

Input: nums = [2,3,1,3,2]
Output: [1,3,3,2,2]
Explanation: '2' and '3' both have a frequency of 2, so they are sorted in decreasing order.

*/

export const frequencySort = (nums: number[]) => {
  let freq: Record<string, number> = {};
  let result: number[] = [];

  for (let num of nums) {
    freq[num] = (freq[num] || 0) + 1;
  }

  Object.entries(freq)
    .sort((a, b) => {
      if (a[1] === b[1]) return +b[0] - +a[0];
      return a[1] - b[1];
    })
    .forEach(([num, count]) => {
      for (let i = 0; i < count; i++) {
        result.push(+num);
      }
    });

  return result;
};

console.log(frequencySort([1, 1, 2, 2, 2, 3]));

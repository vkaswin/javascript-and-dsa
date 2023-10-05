/*

Given an array of integers arr, find the sum of min(b), where b ranges over every (contiguous) subarray of arr. Since the answer may be large, return the answer modulo 109 + 7

Input: arr = [3,1,2,4]
Output: 17
Explanation: 
Subarrays are [3], [1], [2], [4], [3,1], [1,2], [2,4], [3,1,2], [1,2,4], [3,1,2,4]. 
Minimums are 3, 1, 2, 4, 1, 1, 2, 1, 1, 1.
Sum is 17.

*/

function sumSubarrayMins(arr: number[]): number {
  let sum = 0;
  let mod = Math.pow(10, 9) + 7;

  for (let i = 0; i < arr.length; i++) {
    let min = Infinity;
    for (let j = i; j < arr.length; j++) {
      min = Math.min(min, arr[j]);
      sum += min % mod;
    }
  }

  return sum;
}

export const sumSubarrayMinsAlternative = (arr: number[]) => {
  const stack: number[] = [0];
  arr.unshift(-Infinity);
  arr.push(-Infinity);
  let res = 0;

  for (let i = 1; i < arr.length; i++) {
    while (stack.length && arr[i] < arr[stack.at(-1)!]) {
      const mid = stack.pop()!;
      const left = mid - stack.at(-1)!;
      const right = i - mid;
      res += left * right * arr[mid];
    }

    stack.push(i);
  }

  return res % (10 ** 9 + 7);
};

console.log(sumSubarrayMinsAlternative([3, 1, 2, 4]));

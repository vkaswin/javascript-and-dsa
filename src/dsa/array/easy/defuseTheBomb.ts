/*

You have a bomb to defuse, and your time is running out! Your informer will provide you with a circular array code of length of n and a key k.

To decrypt the code, you must replace every number. All the numbers are replaced simultaneously.

If k > 0, replace the ith number with the sum of the next k numbers.
If k < 0, replace the ith number with the sum of the previous k numbers.
If k == 0, replace the ith number with 0.
As code is circular, the next element of code[n-1] is code[0], and the previous element of code[0] is code[n-1].

Given the circular array code and an integer key k, return the decrypted code to defuse the bomb!

Input: code = [5,7,1,4], k = 3
Output: [12,10,16,13]
Explanation: Each number is replaced by the sum of the next 3 numbers. The decrypted code is [7+1+4, 1+4+5, 4+5+7, 5+7+1]. Notice that the numbers wrap around.

*/

export const decrypt = (code: number[], k: number) => {
  let result: number[] = [];
  let isPositive = k >= 0;
  k = Math.abs(k);

  for (let i = 0; i < code.length; i++) {
    let sum = 0;
    let count = 0;

    let j = isPositive ? i + 1 : i - 1 < 0 ? code.length - 1 : i - 1;

    while (count < k) {
      sum += code[j % code.length];
      isPositive ? j++ : j--;
      if (j < 0) j = code.length - 1;
      count++;
    }

    result[i] = sum;
  }

  return result;
};

console.log(decrypt([2, 4, 9, 3], -2));

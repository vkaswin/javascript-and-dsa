/*

You have two arrays A and B. They have the same length and values are from positive integers. For example:

A = [6, 3, 4, 8, 3]
B = [2, 4, 2, 1, 2]
You need to find such two indexes i, j where i != j such that expression A[i] * B[i] + A[i] * B[j] + A[j] * B[j] is maximized. For example here it is i = 3, j = 1 which gives maximum of 52

*/

export const maxSum = (A: number[], B: number[]) => {
  let maxA = 0;
  let maxB = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] > A[maxA]) maxA = i;
    if (B[i] > B[maxB]) maxB = i;
  }

  let maxA1 = 0;
  let maxB1 = 0;

  for (let i = 0; i < A.length; i++) {
    if (i === maxA) continue;
    if (B[i] > B[maxA1]) maxA1 = i;
  }

  for (let i = 0; i < A.length; i++) {
    if (i === maxB) continue;
    if (A[i] > A[maxA1]) maxB1 = i;
  }

  return Math.max(
    A[maxA] * B[maxA] + A[maxA] * B[maxA1] + A[maxA1] * B[maxA1],
    A[maxB] * B[maxB] + A[maxB] * B[maxB1] + A[maxB1] * B[maxB1]
  );
};

console.log(maxSum([6, 3, 4, 8, 3], [2, 4, 2, 1, 2]));

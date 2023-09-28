/*

You are given a positive integer num. You may swap any two digits of num that have the same parity (i.e. both odd digits or both even digits).

Return the largest possible value of num after any number of swaps.

Input: num = 1234
Output: 3412
Explanation: Swap the digit 3 with the digit 1, this results in the number 3214.
Swap the digit 2 with the digit 4, this results in the number 3412.
Note that there may be other sequences of swaps but it can be shown that 3412 is the largest possible number.
Also note that we may not swap the digit 4 with the digit 1 since they are of different parities.

*/

export const largestInteger = (num: number) => {
  let even: number[] = [];
  let odd: number[] = [];
  let str = num.toString();
  let largest = "";

  for (let i = 0; i < str.length; i++) {
    let num = +str[i];
    (num % 2 === 0 ? even : odd).push(num);
  }

  even.sort((a, b) => a - b);
  odd.sort((a, b) => a - b);

  for (let i = 0; i < str.length; i++) {
    largest += (+str[i] % 2 === 0 ? even : odd).pop()!;
  }

  return +largest;
};

console.log(largestInteger(1234));

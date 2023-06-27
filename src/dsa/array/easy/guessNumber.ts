/*

We are playing the Guess Game. The game is as follows:

I pick a number from 1 to n. You have to guess which number I picked.

Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

You call a pre-defined API int guess(int num), which returns three possible results:

-1: Your guess is higher than the number I picked (i.e. num > pick).
1: Your guess is lower than the number I picked (i.e. num < pick).
0: your guess is equal to the number I picked (i.e. num == pick).
Return the number that I picked.

Input: n = 10, pick = 6
Output: 6

*/

let guess = (num: number) => -1;

export const guessNumber = (n: number) => {
  let left = 1;
  let right = n;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    let val = guess(mid);
    if (val === 0) return mid;
    if (val === 1) left = mid + 1;
    else right = mid - 1;
  }
};

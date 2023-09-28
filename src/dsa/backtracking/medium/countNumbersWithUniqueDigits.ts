/*

Given an integer n, return the count of all numbers with unique digits, x, where 0 <= x < 10n.

Input: n = 2
Output: 91
Explanation: The answer should be the total numbers in the range of 0 ≤ x < 100, excluding 11,22,33,44,55,66,77,88,99

*/

export const countNumbersWithUniqueDigits = (n: number) => {
  // start with 1 to count zero
  let count = 1;

  let backtrack = (set: Set<number>) => {
    if (set.size === n) return;

    for (let i = set.size ? 0 : 1; i <= 9; i++) {
      if (set.has(i)) continue;

      count++;
      set.add(i);
      backtrack(set);
      set.delete(i);
    }
  };

  backtrack(new Set());

  return count;
};

console.log(countNumbersWithUniqueDigits(2));

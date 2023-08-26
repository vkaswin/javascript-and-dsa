/*

Given a string s representing a sentence, you need to check if all the numbers in 
s are strictly increasing from left to right 
(i.e., other than the last number, each number is strictly smaller than the number on its right in s)
Return true if so, or false otherwise.

Input: s = "1 box has 3 blue 4 red 6 green and 12 yellow marbles"
Output: true
Explanation: The numbers in s are: 1, 3, 4, 6, 12.
They are strictly increasing from left to right: 1 < 3 < 4 < 6 < 12.

*/

export const areNumbersAscending = (s: string) => {
  let nums = s.split(" ").filter((str) => !isNaN(+str));

  for (let i = 1; i < nums.length; i++) {
    if (+nums[i - 1] >= +nums[i]) return false;
  }

  return true;
};

console.log(
  areNumbersAscending("1 box has 3 blue 4 red 6 green and 12 yellow marbles")
);

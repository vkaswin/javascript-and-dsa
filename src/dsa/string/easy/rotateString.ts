/*

Given two strings s and goal, return true if and only if s can become goal after some 
number of shifts on s.
A shift on s consists of moving the leftmost character of s to the rightmost position.
For example, if s = "abcde", then it will be "bcdea" after one shift.

Input: s = "abcde", goal = "cdeab"
Output: true

Input: s = "abcde", goal = "abced"
Output: false

*/

export const rotateString = (s: string, goal: string) => {
  if (s === goal) return true;

  if (s.length > goal.length) return false;

  return (s + s).includes(goal);
};

console.log(rotateString("abcde", "cdeab"));

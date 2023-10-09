/*

Given two strings s1 and s2, return the lowest ASCII sum of deleted characters to make two strings equal.

Input: s1 = "delete", s2 = "leet"
Output: 403
Explanation: Deleting "dee" from "delete" to turn the string into "let",
adds 100[d] + 101[e] + 101[e] to the sum.
Deleting "e" from "leet" adds 101[e] to the sum.
At the end, both strings are equal to "let", and the answer is 100+101+101+101 = 403.
If instead we turned both strings into "lee" or "eet", we would get answers of 433 or 417, which are higher.

*/

function minimumDeleteSum(s1: string, s2: string) {
  console.log(s1, s2);
}

console.log(minimumDeleteSum("delete", "leet"));

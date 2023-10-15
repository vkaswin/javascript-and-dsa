/*

Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

Input: s = "abcdefg", k = 2
Output: "bacdfeg"

*/

export const reverseStr = (s: string, k: number) => {
  let res = "";
  let str = "";
  let flag = true;
  let j = 1;

  for (let i = 1; i <= s.length; i++) {
    if (flag) str = s[i - 1] + str;
    else res += s[i - 1];

    if (flag && str.length === k) {
      flag = false;
      j += j === 1 ? 1 : 2;
      res += str;
      str = "";
    }

    if (!flag && k * j === i) flag = true;
  }

  return res + str;
};

console.log(reverseStr("abcdefg", 2));

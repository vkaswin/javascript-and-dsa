/*

You are given a binary string s. You are allowed to perform two types of operations on the string in any sequence:

Type-1: Remove the character at the start of the string s and append it to the end of the string.
Type-2: Pick any character in s and flip its value, i.e., if its value is '0' it becomes '1' and vice-versa.
Return the minimum number of type-2 operations you need to perform such that s becomes alternating.

The string is called alternating if no two adjacent characters are equal.

For example, the strings "010" and "1010" are alternating, while the string "0100" is not.

*/

export const minFlips = (s: string) => {
  let str = s + s;
  let str1 = "";
  let str2 = "";
  let flip1 = 0;
  let flip2 = 0;
  let minFlip = Infinity;

  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      str1 += "0";
      str2 += "1";
    } else {
      str1 += "1";
      str2 += "0";
    }
  }

  let left = 0;
  let right = 0;

  while (right < str.length) {
    if (str[right] !== str1[right]) flip1++;
    if (str[right] !== str2[right]) flip2++;

    if (right - left + 1 === s.length) {
      minFlip = Math.min(minFlip, flip1, flip2);
      if (str[left] !== str1[left]) flip1--;
      if (str[left] !== str2[left]) flip2--;

      left++;
    }

    right++;
  }

  return minFlip;
};

console.log(minFlips("01001001101"));

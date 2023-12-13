/*

You are given a string num representing a large integer. An integer is good if it meets the following conditions:

It is a substring of num with length 3.
It consists of only one unique digit.
Return the maximum good integer as a string or an empty string "" if no such integer exists.

Note:

A substring is a contiguous sequence of characters within a string.
There may be leading zeroes in num or a good integer.

Input: num = "6777133339"
Output: "777"
Explanation: There are two distinct good integers: "777" and "333".
"777" is the largest, so we return "777".

*/

export const largestGoodInteger = (num: string) => {
  let left = 0;
  let right = 0;
  let max = "";
  let curr = "";

  while (right < num.length) {
    if (num[left] !== num[right]) {
      left = right;
      curr = "";
    }

    curr += num[right];
    right++;

    if (right - left === 3) {
      if (curr > max) max = curr;
      left = right;
      curr = "";
    }
  }

  return max;
};

console.log(largestGoodInteger("6777133339"));

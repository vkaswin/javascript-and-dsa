/*

A binary string is monotone increasing if it consists of some number of 0's (possibly none), followed by some number of 1's (also possibly none).

You are given a binary string s. You can flip s[i] changing it from 0 to 1 or from 1 to 0.

Return the minimum number of flips to make s monotone increasing.

Input: s = "010110"
Output: 2
Explanation: We flip to get 011111, or alternatively 000111.

*/

export const minFlipsMonoIncr = (s: string) => {
  let stack: string[] = [];
  let count = 0;

  for (let char of s) {
    if (stack.length && char < stack.at(-1)!) {
      stack.pop();
      count++;
      continue;
    }

    stack.push(char);
  }

  return count;
};

console.log(minFlipsMonoIncr("00011000"));

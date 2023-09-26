/*

You are given a 0-indexed string blocks of length n, where blocks[i] is either 'W' or 'B', representing the color of the ith block. The characters 'W' and 'B' denote the colors white and black, respectively.

You are also given an integer k, which is the desired number of consecutive black blocks.

In one operation, you can recolor a white block such that it becomes a black block.

Return the minimum number of operations needed such that there is at least one occurrence of k consecutive black blocks.

Input: blocks = "WBBWWBBWBW", k = 7
Output: 3
Explanation:
One way to achieve 7 consecutive black blocks is to recolor the 0th, 3rd, and 4th blocks
so that blocks = "BBBBBBBWBW". 
It can be shown that there is no way to achieve 7 consecutive black blocks in less than 3 operations.
Therefore, we return 3.

*/

export const minimumRecolors = (blocks: string, k: number) => {
  let left = 0;
  let right = 0;
  let W = 0;
  let B = 0;
  let min = Infinity;

  while (right < blocks.length) {
    if (blocks[right++] === "W") W++;
    else B++;

    if (right - left === k) {
      min = Math.min(min, W);
      if (blocks[left++] === "W") W--;
      else B--;
    }
  }

  return min;
};

console.log(minimumRecolors("WBBWWBBWBW", 7));

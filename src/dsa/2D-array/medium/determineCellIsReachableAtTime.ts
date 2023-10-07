/*

You are given four integers sx, sy, fx, fy, and a non-negative integer t.

In an infinite 2D grid, you start at the cell (sx, sy). Each second, you must move to any of its adjacent cells.

Return true if you can reach cell (fx, fy) after exactly t seconds, or false otherwise.

A cell's adjacent cells are the 8 cells around it that share at least one corner with it. You can visit the same cell several times.

Input: sx = 2, sy = 4, fx = 7, fy = 7, t = 6
Output: true
Explanation: Starting at cell (2, 4), we can reach cell (7, 7) in exactly 6 seconds by going through the cells depicted in the picture above. 

*/

export const isReachableAtTime = (
  sx: number,
  sy: number,
  fx: number,
  fy: number,
  t: number
) => {
  let dx = Math.abs(fx - sx);
  let dy = Math.abs(fy - sy);

  if (dx === 0 && dy === 0 && t === 1) return false;

  return Math.max(dx, dy) <= t;
};

console.log(isReachableAtTime(3, 1, 7, 3, 3));

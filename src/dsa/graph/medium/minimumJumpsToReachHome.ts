/*

A certain bug's home is on the x-axis at position x. Help them get there from position 0.

The bug jumps according to the following rules:

It can jump exactly a positions forward (to the right).
It can jump exactly b positions backward (to the left).
It cannot jump backward twice in a row.
It cannot jump to any forbidden positions.
The bug may jump forward beyond its home, but it cannot jump to positions numbered with negative integers.

Given an array of integers forbidden, where forbidden[i] means that the bug cannot jump to the position forbidden[i], and integers a, b, and x, return the minimum number of jumps needed for the bug to reach its home. If there is no possible sequence of jumps that lands the bug on position x, return -1.

Input: forbidden = [14,4,18,1,15], a = 3, b = 15, x = 9
Output: 3
Explanation: 3 jumps forward (0 -> 3 -> 6 -> 9) will get the bug home.

*/

export const minimumJumps = (
  forbidden: number[],
  a: number,
  b: number,
  x: number
) => {
  let jump = 0;
  let queue: [number, boolean][] = [[0, true]];
  let visited = new Set<number>(forbidden);
  let limit = 2000 + a + b;

  while (queue.length) {
    let next: [number, boolean][] = [];

    for (let [position, jumpBack] of queue) {
      if (position === x) return jump;

      if (visited.has(position)) continue;

      visited.add(position);

      if (jumpBack && position - b >= 0) next.push([position - b, false]);

      if (position + a <= limit) next.push([position + a, true]);
    }

    queue = next;
    jump++;
  }

  return -1;
};

console.log(
  minimumJumps(
    [
      162, 118, 178, 152, 167, 100, 40, 74, 199, 186, 26, 73, 200, 127, 30, 124,
      193, 84, 184, 36, 103, 149, 153, 9, 54, 154, 133, 95, 45, 198, 79, 157,
      64, 122, 59, 71, 48, 177, 82, 35, 14, 176, 16, 108, 111, 6, 168, 31, 134,
      164, 136, 72, 98,
    ],
    29,
    98,
    80
  )
);

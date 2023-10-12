/*

You are a hiker preparing for an upcoming hike. You are given heights, a 2D array of size rows x columns, where heights[row][col] represents the height of cell (row, col). You are situated in the top-left cell, (0, 0), and you hope to travel to the bottom-right cell, (rows-1, columns-1) (i.e., 0-indexed). You can move up, down, left, or right, and you wish to find a route that requires the minimum effort.

A route's effort is the maximum absolute difference in heights between two consecutive cells of the route.

Return the minimum effort required to travel from the top-left cell to the bottom-right cell.

Input: heights = [[1,2,2],[3,8,2],[5,3,5]]
Output: 2
Explanation: The route of [1,3,5,3,5] has a maximum absolute difference of 2 in consecutive cells.
This is better than the route of [1,2,2,2,5], where the maximum absolute difference is 3.

*/

import { MinHeap } from "@/dsa/heap";

export const minimumEffortPath = (heights: number[][]) => {
  let row = heights.length;
  let col = heights[0].length;
  let directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  let vistied = new Set<string>();
  let heap = new MinHeap<number[]>((val) => val[2]);
  heap.insert([0, 0, 0]);

  while (heap.size) {
    let [i, j, effort] = heap.remove()!;

    let key = `${i},${j}`;

    if (vistied.has(key)) continue;

    if (i === row - 1 && j === col - 1) return effort;

    vistied.add(key);

    for (let [x, y] of directions) {
      x += i;
      y += j;

      if (x < 0 || y < 0 || x >= row || y >= col) continue;

      heap.insert([
        x,
        y,
        Math.max(effort, Math.abs(heights[i][j] - heights[x][y])),
      ]);
    }
  }

  return -1;
};

console.log(
  minimumEffortPath([
    [1, 2, 2],
    [3, 8, 2],
    [5, 3, 5],
  ])
);

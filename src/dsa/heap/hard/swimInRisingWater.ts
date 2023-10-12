/*

You are given an n x n integer matrix grid where each value grid[i][j] represents the elevation at that point (i, j).

The rain starts to fall. At time t, the depth of the water everywhere is t. You can swim from a square to another 4-directionally adjacent square if and only if the elevation of both squares individually are at most t. You can swim infinite distances in zero time. Of course, you must stay within the boundaries of the grid during your swim.

Return the least time until you can reach the bottom right square (n - 1, n - 1) if you start at the top left square (0, 0).

Input: grid = [[0,1,2,3,4],[24,23,22,21,5],[12,13,14,15,16],[11,17,18,19,20],[10,9,8,7,6]]
Output: 16
Explanation: The final route is shown.
We need to wait until time 16 so that (0, 0) and (4, 4) are connected.

*/

import { MinHeap } from "@/dsa/heap";

export const swimInWater = (grid: number[][]) => {
  let row = grid.length;
  let col = grid[0].length;
  let heap = new MinHeap<number[]>((val) => val[2]);
  heap.insert([0, 0, grid[0][0]]);
  let directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  let visited = new Array(row).fill(0).map(() => new Array(col).fill(false));

  while (heap.size) {
    let [i, j, time] = heap.remove()!;

    if (i === row - 1 && j === col - 1) return time;

    if (visited[i][j]) continue;

    visited[i][j] = true;

    for (let [x, y] of directions) {
      x += i;
      y += j;

      if (x < 0 || y < 0 || x >= row || y >= col) continue;

      heap.insert([x, y, Math.max(time, grid[x][y])]);
    }
  }
};

console.log(
  swimInWater([
    [0, 1, 2, 3, 4],
    [24, 23, 22, 21, 5],
    [12, 13, 14, 15, 16],
    [11, 17, 18, 19, 20],
    [10, 9, 8, 7, 6],
  ])
);

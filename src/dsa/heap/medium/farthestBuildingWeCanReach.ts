/*

You are given an integer array heights representing the heights of buildings, some bricks, and some ladders.

You start your journey from building 0 and move to the next building by possibly using bricks or ladders.

While moving from building i to building i+1 (0-indexed),

If the current building's height is greater than or equal to the next building's height, you do not need a ladder or bricks.
If the current building's height is less than the next building's height, you can either use one ladder or (h[i+1] - h[i]) bricks.
Return the furthest building index (0-indexed) you can reach if you use the given ladders and bricks optimally.

Input: heights = [4,2,7,6,9,14,12], bricks = 5, ladders = 1
Output: 4
Explanation: Starting at building 0, you can follow these steps:
- Go to building 1 without using ladders nor bricks since 4 >= 2.
- Go to building 2 using 5 bricks. You must use either bricks or ladders because 2 < 7.
- Go to building 3 without using ladders nor bricks since 7 >= 6.
- Go to building 4 using your only ladder. You must use either bricks or ladders because 6 < 9.
It is impossible to go beyond building 4 because you do not have any more bricks or ladders.

*/

import { MaxHeap } from "@/dsa/heap";

export const furthestBuilding = (
  heights: number[],
  bricks: number,
  ladders: number
) => {
  let heap = new MaxHeap<number>();

  for (let i = 1; i < heights.length; i++) {
    if (heights[i] <= heights[i - 1]) continue;

    let diff = heights[i] - heights[i - 1];

    if (bricks >= diff) {
      bricks -= diff;
      heap.insert(diff);
    } else if (ladders > 0) {
      if (heap.size && heap.peak()! > diff) {
        bricks += heap.remove()!; // max bricks used so far
        bricks -= diff;
        heap.insert(diff);
      }
      ladders--;
    } else {
      return i - 1;
    }
  }

  return heights.length - 1;
};

export const furthestBuildingDP = (
  heights: number[],
  bricks: number,
  ladders: number
) => {
  let cache: Record<string, number> = {};

  let recurse = (index: number, bricks: number, ladders: number): number => {
    if (index === heights.length - 1) return 0;

    let key = `${index},${bricks},${ladders}`;

    if (key in cache) return cache[key];

    let isSmaller = heights[index] < heights[index + 1];

    let withLadder = 0;
    let withBricks = 0;

    if (!isSmaller || ladders >= 1) {
      withLadder +=
        1 + recurse(index + 1, bricks, isSmaller ? ladders - 1 : ladders);
    }

    let diff = heights[index + 1] - heights[index];

    if (!isSmaller || bricks >= diff) {
      withBricks +=
        1 + recurse(index + 1, isSmaller ? bricks - diff : bricks, ladders);
    }

    return (cache[key] = Math.max(withLadder, withBricks));
  };

  return recurse(0, bricks, ladders);
};

console.log(furthestBuilding([4, 2, 7, 6, 9, 14, 12], 5, 1));

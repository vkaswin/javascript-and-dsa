/*

There is a country of n cities numbered from 0 to n - 1 where all the cities are connected by bi-directional roads. The roads are represented as a 2D integer array edges where edges[i] = [xi, yi, timei] denotes a road between cities xi and yi that takes timei minutes to travel. There may be multiple roads of differing travel times connecting the same two cities, but no road connects a city to itself.

Each time you pass through a city, you must pay a passing fee. This is represented as a 0-indexed integer array passingFees of length n where passingFees[j] is the amount of dollars you must pay when you pass through city j.

In the beginning, you are at city 0 and want to reach city n - 1 in maxTime minutes or less. The cost of your journey is the summation of passing fees for each city that you passed through at some moment of your journey (including the source and destination cities).

Given maxTime, edges, and passingFees, return the minimum cost to complete your journey, or -1 if you cannot complete it within maxTime minutes.

Input: maxTime = 30, edges = [[0,1,10],[1,2,10],[2,5,10],[0,3,1],[3,4,10],[4,5,15]], passingFees = [5,1,2,20,20,3]
Output: 11
Explanation: The path to take is 0 -> 1 -> 2 -> 5, which takes 30 minutes and has $11 worth of passing fees.


*/

import { MinHeap } from "@/dsa/heap";

export const minCost = (
  maxTime: number,
  edges: number[][],
  passingFees: number[]
) => {
  let n = passingFees.length;
  let graph: Record<string, number[][]> = {};

  for (let i = 0; i < n; i++) {
    graph[i] = [];
  }

  for (let [src, dest, time] of edges) {
    graph[src].push([dest, time]);
    graph[dest].push([src, time]);
  }

  let heap = new MinHeap<number[]>((val) => val[2]);
  let dp = new Array(n).fill(Infinity);
  heap.insert([0, 0, passingFees[0]]);

  while (heap.size) {
    let [vertex, time, cost] = heap.remove()!;

    if (vertex === n - 1) return cost;

    for (let [neighbourNode, neighbourTime] of graph[vertex]) {
      let temp = cost + passingFees[neighbourNode];
      let nextTime = time + neighbourTime;

      if (nextTime < dp[neighbourNode] && nextTime <= maxTime) {
        dp[neighbourNode] = nextTime;
        heap.insert([neighbourNode, nextTime, temp]);
      }
    }
  }

  return -1;
};

console.log(
  minCost(
    30,
    [
      [0, 1, 10],
      [1, 2, 10],
      [2, 5, 10],
      [0, 3, 1],
      [3, 4, 10],
      [4, 5, 15],
    ],
    [5, 1, 2, 20, 20, 3]
  )
);

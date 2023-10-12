/*

You are in a city that consists of n intersections numbered from 0 to n - 1 with bi-directional roads between some intersections. The inputs are generated such that you can reach any intersection from any other intersection and that there is at most one road between any two intersections.

You are given an integer n and a 2D integer array roads where roads[i] = [ui, vi, timei] means that there is a road between intersections ui and vi that takes timei minutes to travel. You want to know in how many ways you can travel from intersection 0 to intersection n - 1 in the shortest amount of time.

Return the number of ways you can arrive at your destination in the shortest amount of time. Since the answer may be large, return it modulo 109 + 7.

Input: n = 7, roads = [[0,6,7],[0,1,2],[1,2,3],[1,3,3],[6,3,3],[3,5,1],[6,5,1],[2,5,1],[0,4,5],[4,6,2]]
Output: 4
Explanation: The shortest amount of time it takes to go from intersection 0 to intersection 6 is 7 minutes.
The four ways to get there in 7 minutes are:
- 0 ➝ 6
- 0 ➝ 4 ➝ 6
- 0 ➝ 1 ➝ 2 ➝ 5 ➝ 6
- 0 ➝ 1 ➝ 3 ➝ 5 ➝ 6

*/

import { MinHeap } from "@/dsa/heap";

export const countPaths = (n: number, roads: number[][]) => {
  let graph = new Map<number, number[][]>();
  let mod = Math.pow(10, 9) + 7;

  for (let i = 0; i < n; i++) {
    graph.set(i, []);
  }

  for (let [src, dest, time] of roads) {
    graph.get(src)!.push([dest, time]);
    graph.get(dest)!.push([src, time]);
  }

  let dp = new Array(n).fill(Infinity);
  let heap = new MinHeap<number[]>((arr) => arr[1]);
  let ways = new Array(n);
  ways[0] = 1;
  heap.insert([0, 0]);

  while (heap.size) {
    let [vertex, time] = heap.remove()!;

    if (vertex === n - 1) continue;

    for (let [neighbourNode, neighbourTime] of graph.get(vertex)!) {
      let newTime = time + neighbourTime;
      if (newTime < dp[neighbourNode]) {
        dp[neighbourNode] = newTime;
        heap.insert([neighbourNode, newTime]);
        ways[neighbourNode] = ways[vertex];
      } else if (newTime === dp[neighbourNode]) {
        ways[neighbourNode] += ways[vertex];
      }
    }
  }

  return ways.at(-1) % mod;
};

console.log(
  countPaths(7, [
    [0, 6, 7],
    [0, 1, 2],
    [1, 2, 3],
    [1, 3, 3],
    [6, 3, 3],
    [3, 5, 1],
    [6, 5, 1],
    [2, 5, 1],
    [0, 4, 5],
    [4, 6, 2],
  ])
);

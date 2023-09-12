/*

You are given a network of n nodes, labeled from 1 to n. You are also given times, a list of travel times as directed edges times[i] = (ui, vi, wi), where ui is the source node, vi is the target node, and wi is the time it takes for a signal to travel from source to target.

We will send a signal from a given node k. Return the minimum time it takes for all the n nodes to receive the signal. If it is impossible for all the n nodes to receive the signal, return -1.

Input: times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2
Output: 2

*/

export const networkDelayTime = (times: number[][], n: number, k: number) => {
  let distances = new Array(n + 1).fill(Infinity);
  distances[0] = 0;
  distances[k] = 0;
  let queue: [number, number][] = [[k, 0]];
  let graph = new Map<number, [number, number][]>();

  for (let i = 1; i <= n; i++) {
    graph.set(i, []);
  }

  for (let [src, dest, time] of times) {
    graph.get(src)!.push([dest, time]);
  }

  while (queue.length) {
    let next: [number, number][] = [];

    for (let [vertex, currDistance] of queue) {
      for (let [node, distance] of graph.get(vertex)!) {
        if (currDistance + distance >= distances[node]) continue;
        distances[node] = currDistance + distance;
        next.push([node, distances[node]]);
      }
    }

    queue = next;
  }

  let max = Math.max(...distances);

  return max === Infinity ? -1 : max;
};

console.log(
  networkDelayTime(
    [
      [2, 1, 1],
      [2, 3, 1],
      [3, 4, 1],
    ],
    4,
    2
  )
);

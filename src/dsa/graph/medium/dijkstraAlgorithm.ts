/*

Given a weighted, undirected and connected graph of V vertices and an adjacency list adj where adj[i] 
is a list of lists containing two integers where the first integer of each list j denotes there is
edge between i and j , second integers corresponds to the weight of that  edge .
You are given the source vertex S and You to Find the shortest distance of all the vertex's 
from the source vertex S. You have to return a list of integers denoting shortest distance between
each node and Source vertex S.

Note: The Graph doesn't contain any negative weight cycle.

*/

export const shortestPath = (n: number, edges: number[][], src: number) => {
  let dp = new Array(n).fill(Infinity);
  dp[src] = 0;
  let queue = [[src, 0]];
  let graph: Record<number, number[][]> = {};

  for (let i = 0; i < n; i++) {
    graph[i] = [];
  }

  for (let [src, dest, distance] of edges) {
    graph[src].push([dest, distance]);
  }

  while (queue.length) {
    let next: number[][] = [];

    for (let [vertex, distance] of queue) {
      for (let [neighbourNode, neighbourDistance] of graph[vertex]) {
        let temp = distance + neighbourDistance;
        if (temp < dp[neighbourNode]) {
          dp[neighbourNode] = temp;
          next.push([neighbourNode, temp]);
        }
      }
    }

    queue = next;
  }

  for (let i = 0; i < dp.length; i++) {
    if (dp[i] === Infinity) dp[i] = -1;
  }

  return dp;
};

console.log(
  shortestPath(
    5,
    [
      [0, 1, 10],
      [0, 2, 3],
      [1, 3, 2],
      [2, 1, 4],
      [2, 3, 8],
      [2, 4, 2],
      [3, 4, 5],
    ],
    0
  )
);

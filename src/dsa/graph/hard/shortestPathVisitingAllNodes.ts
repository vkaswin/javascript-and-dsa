/*

You have an undirected, connected graph of n nodes labeled from 0 to n - 1. You are given an array graph where graph[i] is a list of all the nodes connected with node i by an edge.

Return the length of the shortest path that visits every node. You may start and stop at any node, you may revisit nodes multiple times, and you may reuse edges.

Input: graph = [[1],[0,2,4],[1,3,4],[2],[1,2]]
Output: 4
Explanation: One possible path is [0,1,4,2,3]

*/

export const shortestPathLength = (graph: number[][]) => {
  let visited: Record<number, Set<number>> = {};
  let queue: [number, Set<number>][] = [];
  let n = graph.length;
  let distance = 0;
  let seen = new Set<string>();

  for (let i = 0; i < n; i++) {
    visited[i] = new Set();
    queue.push([i, new Set<number>().add(i)]);
  }

  while (queue.length) {
    let next: [number, Set<number>][] = [];

    for (let [node, visited] of queue) {
      if (visited.size === n) return distance;

      let path = [...visited].toString();

      if (seen.has(path + "," + node)) continue;

      seen.add(path + "," + node);

      for (let neighbour of graph[node]) {
        next.push([neighbour, new Set(visited).add(neighbour)]);
      }
    }

    queue = next;
    distance++;
  }

  return -1;
};

console.log(
  shortestPathLength([
    [6, 8],
    [2, 9],
    [1, 3, 5],
    [2, 6],
    [5],
    [2, 6, 4],
    [5, 3, 0, 7],
    [6],
    [0],
    [1],
  ])
);

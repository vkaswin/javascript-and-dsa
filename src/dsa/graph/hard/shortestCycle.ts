/*

There is a bi-directional graph with n vertices, where each vertex is labeled from 0 to n - 1. The edges in the graph are represented by a given 2D integer array edges, where edges[i] = [ui, vi] denotes an edge between vertex ui and vertex vi. Every vertex pair is connected by at most one edge, and no vertex has an edge to itself.

Return the length of the shortest cycle in the graph. If no cycle exists, return -1.

A cycle is a path that starts and ends at the same node, and each edge in the path is used only once.

Input: n = 7, edges = [[0,1],[1,2],[2,0],[3,4],[4,5],[5,6],[6,3]]
Output: 3
Explanation: The cycle with the smallest length is : 0 -> 1 -> 2 -> 0 

*/

export const findShortestCycle = (n: number, edges: number[][]) => {
  let graph = new Map<number, number[]>();
  let minLength = Infinity;

  for (let i = 0; i < n; i++) {
    graph.set(i, []);
  }

  for (let [src, dest] of edges) {
    graph.get(src)!.push(dest);
    graph.get(dest)!.push(src);
  }

  let findCycle = (node: number) => {
    let queue: [number, number][] = [[node, -1]];
    let map = new Map<number, number>();
    let distance = 0;

    while (queue.length) {
      let next: [number, number][] = [];

      for (let [vertex, parent] of queue) {
        if (vertex === node && parent !== -1)
          return distance - map.get(vertex)!;

        if (!map.has(vertex)) map.set(vertex, distance);

        for (let neighbour of graph.get(vertex)!) {
          if (neighbour === parent) continue;
          next.push([neighbour, vertex]);
        }
      }

      queue = next;
      distance++;
    }

    return Infinity;
  };

  for (let [key] of graph) {
    minLength = Math.min(minLength, findCycle(key));
  }

  return minLength === Infinity ? -1 : minLength;
};

console.log(
  findShortestCycle(7, [
    [0, 1],
    [1, 2],
    [2, 0],
    [3, 4],
    [4, 5],
    [5, 6],
    [6, 3],
  ])
);

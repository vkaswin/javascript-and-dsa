/*

There is a bi-directional graph with n vertices, where each vertex is labeled from 0 to n - 1 (inclusive). The edges in the graph are represented as a 2D integer array edges, where each edges[i] = [ui, vi] denotes a bi-directional edge between vertex ui and vertex vi. Every vertex pair is connected by at most one edge, and no vertex has an edge to itself.

You want to determine if there is a valid path that exists from vertex source to vertex destination.

Given edges and the integers n, source, and destination, return true if there is a valid path from source to destination, or false otherwise.

Input: n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2
Output: true
Explanation: There are two paths from vertex 0 to vertex 2:
- 0 → 1 → 2
- 0 → 2

*/

export const validPath = (
  n: number,
  edges: number[][],
  source: number,
  destination: number
) => {
  let graph: Record<number, number[]> = {};
  let visited = new Set<number>();

  for (let [src, dest] of edges) {
    if (!graph[src]) graph[src] = [];
    if (!graph[dest]) graph[dest] = [];
    graph[src].push(dest);
    graph[dest].push(src);
  }

  let queue = [source];

  while (queue.length) {
    let next = [];

    for (let i = 0; i < queue.length; i++) {
      let node = queue[i];
      if (node === destination) return true;
      if (visited.has(node)) continue;
      visited.add(node);
      for (let neighbour of graph[node]) {
        next.push(neighbour);
      }
    }
    queue = next;
  }

  return false;
};

console.log(
  validPath(
    6,
    [
      [0, 1],
      [0, 2],
      [3, 5],
      [5, 4],
      [4, 3],
    ],
    0,
    5
  )
);

/*

You are given an integer n. There is an undirected graph with n vertices, numbered from 0 to n - 1. You are given a 2D integer array edges where edges[i] = [ai, bi] denotes that there exists an undirected edge connecting vertices ai and bi.

Return the number of complete connected components of the graph.

A connected component is a subgraph of a graph in which there exists a path between any two vertices, and no vertex of the subgraph shares an edge with a vertex outside of the subgraph.

A connected component is said to be complete if there exists an edge between every pair of its vertices.

Input: n = 6, edges = [[0,1],[0,2],[1,2],[3,4]]
Output: 3
Explanation: From the picture above, one can see that all of the components of this graph are complete.

*/

export const countCompleteComponents = (n: number, edges: number[][]) => {
  let graph = new Map<number, number[]>();
  let visited = new Set<number>();
  let count = 0;

  for (let i = 0; i < n; i++) {
    graph.set(i, []);
  }

  for (let [src, dest] of edges) {
    if (!graph.has(src)) graph.set(src, []);
    if (!graph.has(dest)) graph.set(dest, []);

    graph.get(src)!.push(dest);
    graph.get(dest)!.push(src);
  }

  let isConnected = (src: number) => {
    let queue: number[] = [src];
    let edges = 0;
    let nodes = 0;

    while (queue.length) {
      let next: number[] = [];

      for (let vertex of queue) {
        if (visited.has(vertex)) continue;
        visited.add(vertex);
        nodes++;

        for (let neighbour of graph.get(vertex)!) {
          if (visited.has(neighbour)) continue;
          next.push(neighbour);
          edges++;
        }
      }

      queue = next;
    }

    return edges === (nodes * (nodes - 1)) / 2;
  };

  for (let [vertex] of graph) {
    if (visited.has(vertex)) continue;
    if (isConnected(vertex)) count++;
  }

  return count;
};

console.log(
  countCompleteComponents(6, [
    [0, 1],
    [0, 2],
    [1, 2],
    [3, 4],
  ])
);

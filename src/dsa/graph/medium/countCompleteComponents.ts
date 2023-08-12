/*

You are given an integer n. There is an undirected graph with n vertices, numbered from 0 to n - 1. You are given a 2D integer array edges where edges[i] = [ai, bi] denotes that there exists an undirected edge connecting vertices ai and bi.

Return the number of complete connected components of the graph.

A connected component is a subgraph of a graph in which there exists a path between any two vertices, and no vertex of the subgraph shares an edge with a vertex outside of the subgraph.

A connected component is said to be complete if there exists an edge between every pair of its vertices.

*/

export const countCompleteComponents = (n: number, edges: number[][]) => {
  let graph: Record<number, number[]> = {};
  let visited = new Set<number>();
  let count = 0;

  for (let [src, dest] of edges) {
    if (!graph[src]) graph[src] = [];
    if (!graph[dest]) graph[dest] = [];
    graph[src].push(dest);
    graph[dest].push(src);
  }

  let bfs = (source: number) => {
    let queue = [source];

    while (queue.length) {
      let next = [];

      for (let i = 0; i < queue.length; i++) {
        let node = queue[i];

        if (node === source) return true;

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

  for (let node in graph) {
    if (visited.has(+node)) continue;
    if (bfs(+node)) count++;
  }

  return count;
};

console.log(
  countCompleteComponents(6, [
    [0, 1],
    [0, 2],
    [1, 2],
    [3, 4],
    [3, 5],
  ])
);

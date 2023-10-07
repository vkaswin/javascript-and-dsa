/*

You are given an integer n. There is an undirected graph with n nodes, numbered from 0 to n - 1. You are given a 2D integer array edges where edges[i] = [ai, bi] denotes that there exists an undirected edge connecting nodes ai and bi.

Return the number of pairs of different nodes that are unreachable from each other.

Input: n = 7, edges = [[0,2],[0,5],[2,4],[1,6],[5,4]]
Output: 14
Explanation: There are 14 pairs of nodes that are unreachable from each other:
[[0,1],[0,3],[0,6],[1,2],[1,3],[1,4],[1,5],[2,3],[2,6],[3,4],[3,5],[3,6],[4,6],[5,6]].
Therefore, we return 14.

*/

export const countPairs = (n: number, edges: number[][]) => {
  let graph = new Map();
  let nodes = [];
  let visited = new Set<number>();
  let count = 0;

  for (let i = 0; i < n; i++) {
    graph.set(i, []);
  }

  for (let [src, dest] of edges) {
    graph.get(src).push(dest);
    graph.get(dest).push(src);
  }

  let dfs = (vertex: number) => {
    if (visited.has(vertex)) return;

    visited.add(vertex);

    for (let neighbour of graph.get(vertex)) {
      dfs(neighbour);
    }
  };

  for (let [vertex] of graph) {
    if (visited.has(vertex)) continue;

    let size = visited.size;
    dfs(vertex);
    nodes.push(visited.size - size);
  }

  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      count += nodes[i] * nodes[j];
    }
  }

  return count;
};

console.log(
  countPairs(7, [
    [0, 2],
    [0, 5],
    [2, 4],
    [1, 6],
    [5, 4],
  ])
);

/*

There is an undirected star graph consisting of n nodes labeled from 1 to n. A star graph is a graph where there is one center node and exactly n - 1 edges that connect the center node with every other node.

You are given a 2D integer array edges where each edges[i] = [ui, vi] indicates that there is an edge between the nodes ui and vi. Return the center of the given star graph.

Input: edges = [[1,2],[2,3],[4,2]]
Output: 2
Explanation: As shown in the figure above, node 2 is connected to every other node, so 2 is the center.

*/

export const findCenter = (edges: number[][]) => {
  let graph: Record<number, number[]> = {};

  for (let [src, dest] of edges) {
    if (!graph[src]) graph[src] = [];
    if (!graph[dest]) graph[dest] = [];
    graph[src].push(dest);
    graph[dest].push(src);
  }

  let len = Object.keys(graph).length - 1;

  for (let node in graph) {
    if (graph[node].length === len) return +node;
  }
};

export const findCenterAlternative = (edges: number[][]) => {
  let [[a, b], [c, d]] = edges;

  return a === c || b === c ? c : d;
};

console.log(
  findCenter([
    [1, 2],
    [2, 3],
    [4, 2],
  ])
);

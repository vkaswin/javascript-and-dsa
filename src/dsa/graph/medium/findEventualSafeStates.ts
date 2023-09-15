/*

There is a directed graph of n nodes with each node labeled from 0 to n - 1. The graph is represented by a 0-indexed 2D integer array graph where graph[i] is an integer array of nodes adjacent to node i, meaning there is an edge from node i to each node in graph[i].

A node is a terminal node if there are no outgoing edges. A node is a safe node if every possible path starting from that node leads to a terminal node (or another safe node).

Return an array containing all the safe nodes of the graph. The answer should be sorted in ascending order.

Input: graph = [[1,2],[2,3],[5],[0],[5],[],[]]
Output: [2,4,5,6]
Explanation: The given graph is shown above.
Nodes 5 and 6 are terminal nodes as there are no outgoing edges from either of them.
Every path starting at nodes 2, 4, 5, and 6 all lead to either node 5 or 6.

*/

export const eventualSafeNodes = (graph: number[][]) => {
  let terminals = new Set<number>();
  let result: number[] = [];
  let visited = new Set<number>();
  let map = new Map<number, boolean>();

  for (let i = 0; i < graph.length; i++) {
    if (!graph[i].length) terminals.add(i);
  }

  let dfs = (vertex: number): boolean => {
    if (map.has(vertex)) return map.get(vertex)!;

    if (terminals.has(vertex)) return true;

    if (visited.has(vertex)) return false;

    visited.add(vertex);

    let isSafe = graph[vertex].every(dfs);

    map.set(vertex, isSafe);

    visited.delete(vertex);

    return isSafe;
  };

  for (let i = 0; i < graph.length; i++) {
    if (dfs(i)) result.push(i);
  }

  return result;
};

console.log(eventualSafeNodes([[1, 2], [2, 3], [5], [0], [5], [], []]));

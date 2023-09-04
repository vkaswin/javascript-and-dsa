/*

You are given a directed graph of n nodes numbered from 0 to n - 1, where each node has at most one outgoing edge.

The graph is represented with a given 0-indexed array edges of size n, indicating that there is a directed edge from node i to node edges[i]. If there is no outgoing edge from node i, then edges[i] == -1.

Return the length of the longest cycle in the graph. If no cycle exists, return -1.

A cycle is a path that starts and ends at the same node.

Input: edges = [3,3,4,2,3]
Output: 3
Explanation: The longest cycle in the graph is the cycle: 2 -> 4 -> 3 -> 2.
The length of this cycle is 3, so 3 is returned.

*/

export const longestCycle = (edges: number[]) => {
  let maxLen = -1;
  let visited = new Set();

  let dfs = (
    vertex: number,
    distance = 0,
    map = new Map<number, number>()
  ): number => {
    if (map.has(vertex)) return distance - map.get(vertex)!;

    if (visited.has(vertex) || edges[vertex] === undefined) return -1;

    map.set(vertex, distance);
    visited.add(vertex);

    return dfs(edges[vertex], distance + 1, map);
  };

  for (let i = 0; i < edges.length; i++) {
    maxLen = Math.max(maxLen, dfs(edges[i]));
  }

  return maxLen;
};

console.log(longestCycle([3, 3, 4, 2, 3]));

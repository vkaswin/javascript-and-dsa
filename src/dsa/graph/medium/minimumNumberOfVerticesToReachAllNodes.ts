/*

Given a directed acyclic graph, with n vertices numbered from 0 to n-1, and an array edges where edges[i] = [fromi, toi] represents a directed edge from node fromi to node toi.

Find the smallest set of vertices from which all nodes in the graph are reachable. It's guaranteed that a unique solution exists.

Notice that you can return the vertices in any order.

*/

function findSmallestSetOfVertices(n: number, edges: number[][]): number[] {
  let result: number[] = [];

  let set = new Set();

  for (let [_, dest] of edges) {
    set.add(dest);
  }

  for (let i = 0; i < n; i++) {
    if (set.has(i)) continue;
    result.push(i);
  }

  return result;
}

console.log(
  findSmallestSetOfVertices(6, [
    [0, 1],
    [0, 2],
    [2, 5],
    [3, 4],
    [4, 2],
  ])
);

/*

Input: n = 5 edges = [[0, 1], [0, 2], [0, 3], [1, 4]]
Output: true.

Input: n = 5 edges = [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]]
Output: false.

*/

export const validTree = (n: number, edges: number[][]) => {
  let visited = new Set();
  let graph = new Map<number, number[]>();

  for (let i = 0; i < n; i++) {
    graph.set(i, []);
  }

  for (let [src, dest] of edges) {
    graph.get(src)!.push(dest);
    graph.get(dest)!.push(src);
  }
  let dfs = (vertex: number, parent: number) => {
    if (visited.has(vertex)) return false;

    visited.add(vertex);

    for (let neighbor of graph.get(vertex)!) {
      if (parent === neighbor) continue;

      if (!dfs(neighbor, vertex)) return false;
    }

    return true;
  };

  return dfs(0, -1) && visited.size === n;
};

console.log(
  validTree(5, [
    [0, 1],
    [0, 2],
    [0, 3],
    [1, 4],
  ])
);

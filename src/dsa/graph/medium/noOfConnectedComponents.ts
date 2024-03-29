/*

You have a graph of n nodes. You are given an integer n and an array edges where edges[i] = [ai, bi] indicates that there is an edge between ai and bi in the graph.

Return the number of connected components in the graph.


Input: n = 5, edges = [[0,1],[1,2],[3,4]]
Output: 2

*/

export const countConnectedComponents = (n: number, edges: number[][]) => {
  let graph: Record<number, number[]> = {};
  let visited = new Set<number>();
  let count = 0;

  for (let i = 0; i < n; i++) {
    graph[i] = [];
  }

  for (let [src, dest] of edges) {
    graph[src].push(dest);
    graph[dest].push(src);
  }

  let bfs = (vertex: number) => {
    let queue: number[] = [vertex];

    while (queue.length) {
      let next: number[] = [];

      for (let i = 0; i < queue.length; i++) {
        let vertex = queue[i];

        if (visited.has(vertex)) continue;

        visited.add(vertex);

        for (let neighbor of graph[vertex]) {
          next.push(neighbor);
        }
      }

      queue = next;
    }
  };

  for (let vertex in graph) {
    if (visited.has(+vertex)) continue;
    bfs(+vertex);
    count++;
  }

  return count;
};

export const countComponents = (n: number, edges: number[][]) => {
  let graph: Record<number, number[]> = {};
  let visted = new Set<number>();
  let count = 0;

  for (let i = 0; i < n; i++) {
    graph[i] = [];
  }

  for (let [src, dest] of edges) {
    graph[src].push(dest);
    graph[dest].push(src);
  }

  let dfs = (vertex: number) => {
    visted.add(vertex);

    for (let neighbour of graph[vertex]) {
      if (visted.has(neighbour)) continue;
      dfs(neighbour);
    }
  };

  for (let key in graph) {
    if (visted.has(+key)) continue;
    dfs(+key);
    count++;
  }

  return count;
};

console.log(
  countConnectedComponents(5, [
    [0, 1],
    [1, 2],
    [3, 4],
  ])
);

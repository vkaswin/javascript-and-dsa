/*

You are given an integer n, the number of nodes in a directed graph where the nodes are labeled from 0 to n - 1. Each edge is red or blue in this graph, and there could be self-edges and parallel edges.

You are given two arrays redEdges and blueEdges where:

redEdges[i] = [ai, bi] indicates that there is a directed red edge from node ai to node bi in the graph, and
blueEdges[j] = [uj, vj] indicates that there is a directed blue edge from node uj to node vj in the graph.
Return an array answer of length n, where each answer[x] is the length of the shortest path from node 0 to node x such that the edge colors alternate along the path, or -1 if such a path does not exist.

Input: n = 3, redEdges = [[0,1]], blueEdges = [[2,1]]
Output: [0,1,-1]

*/

export const shortestAlternatingPaths = (
  n: number,
  redEdges: number[][],
  blueEdges: number[][]
) => {
  let graph = new Map<number, [number, string][]>();
  let result: number[] = new Array(n).fill(Infinity);
  let visited: Record<string, Set<number>> = {
    r: new Set<number>(),
    b: new Set<number>(),
  };

  for (let i = 0; i < n; i++) {
    graph.set(i, []);
  }

  for (let [src, dest] of redEdges) {
    graph.get(src)!.push([dest, "r"]);
  }

  for (let [src, dest] of blueEdges) {
    graph.get(src)!.push([dest, "b"]);
  }

  let queue: [number, string][] = [[0, ""]];
  let distance = 0;

  while (queue.length) {
    let next: [number, string][] = [];

    for (let [vertex, color] of queue) {
      if (color && visited[color].has(vertex)) continue;

      if (color) visited[color].add(vertex);

      result[vertex] = Math.min(result[vertex], distance);

      for (let neighbour of graph.get(vertex)!) {
        if (color === neighbour[1]) continue;
        next.push(neighbour);
      }
    }

    queue = next;
    distance++;
  }

  for (let i = 0; i < result.length; i++) {
    if (result[i] === Infinity) result[i] = -1;
  }

  return result;
};

console.log(
  shortestAlternatingPaths(
    5,
    [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
    ],
    [
      [1, 2],
      [2, 3],
      [3, 1],
    ]
  )
);

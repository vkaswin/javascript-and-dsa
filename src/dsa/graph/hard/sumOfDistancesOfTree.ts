/*

There is an undirected connected tree with n nodes labeled from 0 to n - 1 and n - 1 edges.

You are given the integer n and the array edges where edges[i] = [ai, bi] indicates that there is an edge between nodes ai and bi in the tree.

Return an array answer of length n where answer[i] is the sum of the distances between the ith node in the tree and all other nodes.

Input: n = 6, edges = [[0,1],[0,2],[2,3],[2,4],[2,5]]
Output: [8,12,6,10,10,10]
Explanation: The tree is shown above.
We can see that dist(0,1) + dist(0,2) + dist(0,3) + dist(0,4) + dist(0,5)
equals 1 + 1 + 2 + 2 + 2 = 8.
Hence, answer[0] = 8, and so on.

*/

export const sumOfDistancesInTree = (n: number, edges: number[][]) => {
  let graph: Record<number, number[]> = {};

  for (let i = 0; i < n; i++) {
    graph[i] = [];
  }

  for (let [src, dest] of edges) {
    graph[src].push(dest);
    graph[dest].push(src);
  }

  let findDistance = (vertex: number) => {
    let visited = new Set();
    let level = 0;
    let distance = 0;
    let queue: number[] = [vertex];
    while (queue.length) {
      let next: number[] = [];

      for (let node of queue) {
        if (visited.has(node)) continue;

        visited.add(node);

        for (let neighbour of graph[node]) {
          if (visited.has(neighbour)) continue;
          next.push(neighbour);
        }
      }

      queue = next;
      level++;
      distance += next.length * level;
    }

    return distance;
  };

  let result: number[] = [];
  for (let key in graph) {
    result.push(findDistance(+key));
  }

  return result;
};

console.log(
  sumOfDistancesInTree(6, [
    [0, 1],
    [0, 2],
    [2, 3],
    [2, 4],
    [2, 5],
  ])
);

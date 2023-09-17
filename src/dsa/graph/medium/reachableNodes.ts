/*

There is an undirected tree with n nodes labeled from 0 to n - 1 and n - 1 edges.

You are given a 2D integer array edges of length n - 1 where edges[i] = [ai, bi] indicates that there is an edge between nodes ai and bi in the tree. You are also given an integer array restricted which represents restricted nodes.

Return the maximum number of nodes you can reach from node 0 without visiting a restricted node.

Note that node 0 will not be a restricted node.

Input: n = 7, edges = [[0,1],[1,2],[3,1],[4,0],[0,5],[5,6]], restricted = [4,5]
Output: 4
Explanation: The diagram above shows the tree.
We have that [0,1,2,3] are the only nodes that can be reached from node 0 without visiting a restricted node.

*/

export const reachableNodes = (
  n: number,
  edges: number[][],
  restricted: number[]
) => {
  let graph = new Map<number, number[]>();
  let visited = new Set<number>(restricted);
  let count = 0;

  for (let i = 0; i < n; i++) {
    graph.set(i, []);
  }

  for (let [src, dest] of edges) {
    graph.get(src)!.push(dest);
    graph.get(dest)!.push(src);
  }

  let queue: number[] = [0];

  while (queue.length) {
    let next: number[] = [];

    for (let vertex of queue) {
      if (visited.has(vertex)) continue;

      visited.add(vertex);

      count++;

      for (let neighbour of graph.get(vertex)!) {
        next.push(neighbour);
      }
    }

    queue = next;
  }

  return count;
};

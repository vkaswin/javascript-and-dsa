/*

There are n cities numbered from 0 to n - 1 and n - 1 roads such that there is only one way to travel between two different cities (this network form a tree). Last year, The ministry of transport decided to orient the roads in one direction because they are too narrow.

Roads are represented by connections where connections[i] = [ai, bi] represents a road from city ai to city bi.

This year, there will be a big event in the capital (city 0), and many people want to travel to this city.

Your task consists of reorienting some roads such that each city can visit the city 0. Return the minimum number of edges changed.

It's guaranteed that each city can reach city 0 after reorder.

Input: n = 6, connections = [[0,1],[1,3],[2,3],[4,0],[4,5]]
Output: 3
Explanation: Change the direction of edges show in red such that each node can reach the node 0 (capital).

*/

export const minReorder = (n: number, connections: number[][]) => {
  let graph = new Map<number, Set<number>>();
  let visited = new Set<number>();
  let queue = [0];
  let edges = 0;

  for (let i = 0; i < n; i++) {
    graph.set(i, new Set<number>());
  }

  for (let [src, dest] of connections) {
    graph.get(src)!.add(dest);
    if (dest === 0) queue.push(src);
  }

  while (queue.length) {
    let next: number[] = [];

    for (let vertex of queue) {
      if (visited.has(vertex)) continue;

      visited.add(vertex);

      if (!graph.has(vertex)) continue;

      let neighbours = graph.get(vertex)!;

      for (let neighbour of neighbours) {
        if (visited.has(neighbour)) continue;
        if (graph.has(neighbour) && !graph.get(neighbour)!.has(vertex)) edges++;
        next.push(neighbour);
      }
    }

    queue = next;
  }

  return edges;
};

console.log(
  minReorder(5, [
    [1, 0],
    [1, 2],
    [3, 2],
    [3, 4],
  ])
);

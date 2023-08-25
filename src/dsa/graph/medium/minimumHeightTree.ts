/*

Input: n = 6, edges = [[3,0],[3,1],[3,2],[3,4],[5,4]]
Output: [3,4]

*/

function findMinHeightTrees(n: number, edges: number[][]) {
  let graph = new Map<number, number[]>();
  let visted = new Set<number>();

  for (let i = 0; i < n; i++) {
    graph.set(i, []);
  }

  for (let [src, dest] of edges) {
    graph.get(src)!.push(dest);
    graph.get(dest)!.push(src);
  }

  let bfs = (vertex: number) => {
    let depth = 0;
    let queue: number[][] = [[vertex, -1]];

    while (queue.length) {
      let next: number[][] = [];

      for (let i = 0; i < queue.length; i++) {
        let [vertex, parent] = queue[i];

        if (visted.has(vertex)) return depth;

        visted.add(vertex);

        for (let neighbour of graph.get(vertex)!) {
          if (parent === neighbour) break;
          next.push([neighbour, vertex]);
        }
      }

      queue = next;
      depth++;
    }

    return depth;
  };

  for (let [vertex] of graph) {
    let height = bfs(vertex);
    console.log(height);
    visted.clear();
  }
}

console.log(
  findMinHeightTrees(6, [
    [3, 0],
    [3, 1],
    [3, 2],
    [3, 4],
    [5, 4],
  ])
);

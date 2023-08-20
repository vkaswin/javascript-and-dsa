export const minCostConnectPoints = (points: number[][]) => {
  let graph: Record<number, number[]> = {};

  for (let [src, dest] of points) {
    if (!graph[src]) graph[src] = [];
    graph[src].push(dest);
  }

  console.log(graph);
};

console.log(
  minCostConnectPoints([
    [0, 0],
    [2, 2],
    [3, 10],
    [5, 2],
    [7, 0],
  ])
);

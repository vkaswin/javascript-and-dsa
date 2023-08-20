export const findOrder = (numCourses: number, prerequisites: number[][]) => {
  let graph: Record<string, number[]> = {};
  let visited = new Set<number>();
  let cycle = new Set<number>();
  let result: number[] = [];

  for (let i = 0; i < numCourses; i++) {
    graph[i] = [];
  }

  for (let [src, dest] of prerequisites) {
    graph[src].push(dest);
  }

  let dfs = (vertex: number): boolean => {
    if (cycle.has(vertex)) return false;

    if (visited.has(vertex)) return true;

    cycle.add(vertex);
    visited.add(vertex);

    for (let neighbour of graph[vertex]) {
      if (!dfs(neighbour)) return false;
    }

    cycle.delete(vertex);
    result.push(vertex);

    return true;
  };

  for (let key in graph) {
    if (!dfs(+key)) return [];
  }

  return result;
};

console.log(
  findOrder(2, [
    [0, 1],
    [1, 0],
  ])
);

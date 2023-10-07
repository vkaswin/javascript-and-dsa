/*

There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c.

A province is a group of directly or indirectly connected cities and no other cities outside of the group.

You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.

Return the total number of provinces.

Input: isConnected = [[1,1,0],[1,1,0],[0,0,1]]
Output: 2

*/

export const findCircleNum = (isConnected: number[][]) => {
  let graph = new Map<number, number[]>();
  let visited = new Set<number>();
  let count = 0;

  for (let i = 0; i < isConnected.length; i++) {
    let arr = isConnected[i];
    graph.set(i, []);
    for (let j = 0; j < arr.length; j++) {
      if (i === j || !arr[j]) continue;
      graph.get(i)!.push(j);
    }
  }

  let dfs = (vertex: number) => {
    if (visited.has(vertex)) return;

    visited.add(vertex);

    for (let neighbour of graph.get(vertex)!) {
      dfs(neighbour);
    }
  };

  for (let [vertex] of graph) {
    if (visited.has(vertex)) continue;
    dfs(vertex);
    count++;
  }

  return count;
};

console.log(
  findCircleNum([
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
);

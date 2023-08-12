/*

Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1, find all possible paths from node 0 to node n - 1 and return them in any order.

The graph is given as follows: graph[i] is a list of all nodes you can visit from node i (i.e., there is a directed edge from node i to node graph[i][j]).

Input: graph = [[4,3,1],[3,2,4],[3],[4],[]]
Output: [[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]]

*/

export const allPathsSourceTarget = (graph: number[][]) => {
  let paths: number[][] = [];

  let dfs = (node: number, arr: number[]) => {
    arr.push(node);

    for (let neighbour of graph[node]) {
      dfs(neighbour, arr);
    }

    if (node === graph.length - 1) paths.push([...arr]);

    arr.pop();
  };

  dfs(0, []);

  return paths;
};

console.log(allPathsSourceTarget([[4, 3, 1], [3, 2, 4], [3], [4], []]));

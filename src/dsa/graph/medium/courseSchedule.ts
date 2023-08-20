/*

There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return true if you can finish all courses. Otherwise, return false.

Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.

*/

export const canFinish = (numCourses: number, prerequisites: number[][]) => {
  let graph: Record<string, number[]> = {};
  let visited = new Set<number>();

  for (let i = 0; i < numCourses; i++) {
    graph[i] = [];
  }

  for (let [src, dest] of prerequisites) {
    graph[src].push(dest);
  }

  let dfs = (vertex: number): boolean => {
    if (visited.has(vertex)) return false;

    visited.add(vertex);

    for (let neighbour of graph[vertex]) {
      if (!dfs(neighbour)) return false;
    }

    visited.delete(vertex);
    graph[vertex].length = 0;

    return true;
  };

  for (let key in graph) {
    if (!dfs(+key)) return false;
  }

  return true;
};

console.log(canFinish(2, [[0, 1]]));

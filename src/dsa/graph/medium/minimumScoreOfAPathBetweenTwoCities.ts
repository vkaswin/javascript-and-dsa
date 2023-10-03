/*

You are given a positive integer n representing n cities numbered from 1 to n. You are also given a 2D array roads where roads[i] = [ai, bi, distancei] indicates that there is a bidirectional road between cities ai and bi with a distance equal to distancei. The cities graph is not necessarily connected.

The score of a path between two cities is defined as the minimum distance of a road in this path.

Return the minimum possible score of a path between cities 1 and n.

Note:

A path is a sequence of roads between two cities.
It is allowed for a path to contain the same road multiple times, and you can visit cities 1 and n multiple times along the path.
The test cases are generated such that there is at least one path between 1 and n.

Input: n = 4, roads = [[1,2,9],[2,3,6],[2,4,5],[1,4,7]]
Output: 5
Explanation: The path from city 1 to 4 with the minimum score is: 1 -> 2 -> 4. The score of this path is min(9,5) = 5.
It can be shown that no other path has less score.

*/

export const minScore = (n: number, roads: number[][]) => {
  let graph = new Map<number, number[][]>();
  let visited = new Set();
  let min = Infinity;

  for (let i = 1; i <= n; i++) {
    graph.set(i, []);
  }

  for (let [src, dest, distance] of roads) {
    graph.get(src)!.push([dest, distance]);
    graph.get(dest)!.push([src, distance]);
  }

  let queue = [1];

  while (queue.length) {
    let next: number[] = [];

    for (let vertex of queue) {
      if (visited.has(vertex)) continue;

      visited.add(vertex);

      for (let [neighbour, distance] of graph.get(vertex)!) {
        min = Math.min(min, distance);
        next.push(neighbour);
      }
    }

    queue = next;
  }

  return min;
};

console.log(
  minScore(4, [
    [1, 2, 9],
    [2, 3, 6],
    [2, 4, 5],
    [1, 4, 7],
  ])
);

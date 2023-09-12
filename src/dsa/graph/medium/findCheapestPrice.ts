/*

There are n cities connected by some number of flights. You are given an array flights where flights[i] = [fromi, toi, pricei] indicates that there is a flight from city fromi to city toi with cost pricei.

You are also given three integers src, dst, and k, return the cheapest price from src to dst with at most k stops. If there is no such route, return -1.

Input: n = 4, flights = [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], src = 0, dst = 3, k = 1
Output: 700
Explanation:
The graph is shown above.
The optimal path with at most 1 stop from city 0 to 3 is marked in red and has cost 100 + 600 = 700.
Note that the path through cities [0,1,2,3] is cheaper but is invalid because it uses 2 stops.

*/

export const findCheapestPrice = (
  n: number,
  flights: number[][],
  src: number,
  dst: number,
  k: number
) => {
  let graph = new Map<number, number[][]>();

  for (let i = 0; i < n; i++) {
    graph.set(i, []);
  }

  for (let [src, dest, price] of flights) {
    graph.get(src)!.push([dest, price]);
  }

  let queue: number[][] = [[src, 0]];
  let costDP = new Array(n).fill(Infinity);
  let stops = -1;

  while (queue.length && stops < k) {
    let next: number[][] = [];

    for (let i = 0; i < queue.length; i++) {
      let [currCity, currCost] = queue[i];

      for (let [city, cost] of graph.get(currCity)!) {
        if (cost + currCost < costDP[city]) {
          costDP[city] = cost + currCost;
          next.push([city, costDP[city]]);
        }
      }
    }

    stops++;

    queue = next;
  }

  return costDP[dst] === Infinity ? -1 : costDP[dst];
};

console.log(
  findCheapestPrice(
    4,
    [
      [0, 1, 100],
      [1, 2, 100],
      [2, 0, 100],
      [1, 3, 600],
      [2, 3, 200],
    ],
    0,
    3,
    1
  )
);

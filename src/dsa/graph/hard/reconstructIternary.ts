/*

You are given a list of airline tickets where tickets[i] = [fromi, toi] represent the departure and the arrival airports of one flight. Reconstruct the itinerary in order and return it.

All of the tickets belong to a man who departs from "JFK", thus, the itinerary must begin with "JFK". If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string.

For example, the itinerary ["JFK", "LGA"] has a smaller lexical order than ["JFK", "LGB"].
You may assume all tickets form at least one valid itinerary. You must use all the tickets once and only once.

Input: tickets = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
Output: ["JFK","ATL","JFK","SFO","ATL","SFO"]
Explanation: Another possible reconstruction is ["JFK","SFO","ATL","JFK","ATL","SFO"] but it is larger in lexical order.

*/

export const findItinerary = (tickets: string[][]) => {
  let graph = new Map<string, string[]>();
  let n = tickets.length + 1;

  tickets.sort();

  for (let [src, dest] of tickets) {
    if (!graph.has(src)) graph.set(src, []);
    graph.get(src)!.push(dest);
  }

  let dfs = (vertex: string, paths: string[]) => {
    if (paths.length === n) return true;

    if (!graph.has(vertex)) return;

    let neighbours = graph.get(vertex)!;

    for (let i = 0; i < neighbours.length; i++) {
      let neighbour = neighbours[i];
      if (neighbour === "#") continue;
      paths.push(neighbours[i]);
      neighbours[i] = "#";
      if (dfs(neighbour, paths)) return true;
      paths.pop();
      neighbours[i] = neighbour;
    }
  };

  let result = ["JFK"];

  dfs("JFK", result);

  return result;
};

console.log(
  findItinerary([
    ["EZE", "AXA"],
    ["TIA", "ANU"],
    ["ANU", "JFK"],
    ["JFK", "ANU"],
    ["ANU", "EZE"],
    ["TIA", "ANU"],
    ["AXA", "TIA"],
    ["TIA", "JFK"],
    ["ANU", "TIA"],
    ["JFK", "TIA"],
  ])
);

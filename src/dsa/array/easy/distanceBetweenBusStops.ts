/*

A bus has n stops numbered from 0 to n - 1 that form a circle. We know the distance between all pairs of neighboring stops where distance[i] is the distance between the stops number i and (i + 1) % n.

The bus goes along both directions i.e. clockwise and counterclockwise.

Return the shortest distance between the given start and destination stops.

Input: distance = [1,2,3,4], start = 0, destination = 1
Output: 1
Explanation: Distance between 0 and 1 is 1 or 9, minimum is 1.

*/

export const distanceBetweenBusStops = (
  distance: number[],
  start: number,
  destination: number
) => {
  let forward = 0;
  let backward = 0;

  for (let i = start; true; i++) {
    let index = i % distance.length;
    if (index === destination) break;
    forward += distance[index];
  }

  for (let i = destination; true; i++) {
    let index = ((i % distance.length) + distance.length) % distance.length;
    if (index === start) break;
    backward += distance[index];
  }

  return Math.min(forward, backward);
};

console.log(distanceBetweenBusStops([1, 2, 3, 4], 0, 3));

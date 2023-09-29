/*

You are given two jugs with capacities jug1Capacity and jug2Capacity liters. There is an infinite amount of water supply available. Determine whether it is possible to measure exactly targetCapacity liters using these two jugs.

If targetCapacity liters of water are measurable, you must have targetCapacity liters of water contained within one or both buckets by the end.

Operations allowed:

Fill any of the jugs with water.
Empty any of the jugs.
Pour water from one jug into another till the other jug is completely full, or the first jug itself is empty.

Input: jug1Capacity = 3, jug2Capacity = 5, targetCapacity = 4
Output: true
Explanation: The famous Die Hard example 

*/

export const canMeasureWater = (
  jug1Capacity: number,
  jug2Capacity: number,
  targetCapacity: number
) => {
  console.log(jug1Capacity, jug2Capacity, targetCapacity);
};

console.log(canMeasureWater(3, 5, 4));

/*

Alice has n balloons arranged on a rope. You are given a 0-indexed string colors where colors[i] is the color of the ith balloon.

Alice wants the rope to be colorful. She does not want two consecutive balloons to be of the same color, so she asks Bob for help. Bob can remove some balloons from the rope to make it colorful. You are given a 0-indexed integer array neededTime where neededTime[i] is the time (in seconds) that Bob needs to remove the ith balloon from the rope.

Return the minimum time Bob needs to make the rope colorful.

Input: colors = "abaac", neededTime = [1,2,3,4,5]
Output: 3
Explanation: In the above image, 'a' is blue, 'b' is red, and 'c' is green.
Bob can remove the blue balloon at index 2. This takes 3 seconds.
There are no longer two consecutive balloons of the same color. Total time = 3.

*/

export const minCost = (colors: string, neededTime: number[]) => {
  let max = 0;
  let cost = 0;

  for (let i = 0; i < colors.length; i++) {
    cost += neededTime[i];
    max = Math.max(max, neededTime[i]);

    if (colors[i] !== colors[i + 1]) {
      cost -= max;
      max = 0;
    }
  }

  return cost;
};

console.log(minCost("abaac", [1, 2, 3, 4, 5]));

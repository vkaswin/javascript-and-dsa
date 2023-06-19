/*

There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. 
The biker starts his trip on point 0 with altitude equal 0. You are given an integer array gain of 
length n where gain[i] is the net gain in altitude between points i​​​​​​ and i + 1 for all (0 <= i < n).
Return the highest altitude of a point.

Input: gain = [-4,-3,-2,-1,4,3,2]
Output: 0
Explanation: The altitudes are [0,-4,-7,-9,-10,-6,-3,-1]. The highest is 0.

*/

export const largestAltitude = (gain: number[]) => {
  return Math.max(
    ...gain.reduce(
      (acc, curr, index) => {
        acc.push(acc[index] + curr);
        return acc;
      },
      [0]
    )
  );
};

console.log(largestAltitude([-4, -3, -2, -1, 4, 3, 2]));

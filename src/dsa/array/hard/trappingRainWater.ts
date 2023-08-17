/*

Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

*/

export const trap = (height: number[]) => {
  let left: number[] = [];
  let right: number[] = [];
  let maxLeft = -1;
  let maxRight = -1;

  for (let i = 0, j = height.length - 1; i < height.length; i++, j--) {
    maxLeft = Math.max(maxLeft, height[i]);
    maxRight = Math.max(maxRight, height[j]);

    left[i] = maxLeft;
    right[j] = maxRight;
  }

  let area = 0;

  for (let i = 0; i < height.length; i++) {
    area += Math.min(left[i], right[i]) - height[i];
  }

  return area;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));

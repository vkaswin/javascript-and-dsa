/*

You are given an integer array height of length n. There are n vertical lines drawn such that the 
two endpoints of the ith line are (i, 0) and (i, height[i]).
Find two lines that together with the x-axis form a container, such that the container contains 
the most water.
Return the maximum amount of water a container can store.
Notice that you may not slant the container.

Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. 
In this case, the max area of water (blue section) the container can contain is 49.

*/

function maxArea(height: number[]): number {
  let firstIndex = 0;
  let lastIndex = height.length - 1;
  let largestArea =
    Math.abs(firstIndex - lastIndex) *
    Math.min(height[firstIndex], height[lastIndex]);

  while (firstIndex < lastIndex) {
    height[firstIndex] < height[lastIndex] ? firstIndex++ : lastIndex--;
    largestArea = Math.max(
      largestArea,
      Math.abs(firstIndex - lastIndex) *
        Math.min(height[firstIndex], height[lastIndex])
    );
  }

  return largestArea;
}

export const maxAreaAlternative = (height: number[]) => {
  let max = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = 0; j < height.length; j++) {
      if (j === i) continue;
      let area = Math.abs(i - j) * Math.min(height[i], height[j]);
      if (area > max) max = area;
    }
  }
  return max;
};

console.log(maxArea([6, 8, 6, 2, 5, 4, 8, 3, 7]));

/*

You are given several boxes with different colors represented by different positive numbers.

You may experience several rounds to remove boxes until there is no box left. Each time you can choose some continuous boxes with the same color (i.e., composed of k boxes, k >= 1), remove them and get k * k points.

Return the maximum points you can get.

Input: boxes = [1,3,2,2,2,3,4,3,1]
Output: 23
Explanation:
[1, 3, 2, 2, 2, 3, 4, 3, 1] 
----> [1, 3, 3, 4, 3, 1] (3*3=9 points) 
----> [1, 3, 3, 3, 1] (1*1=1 points) 
----> [1, 1] (3*3=9 points) 
----> [] (2*2=4 points)

*/

export const removeBoxes = (boxes: number[]) => {
  let dfs = (left: number, right: number) => {
    if (left > right) return 0;

    let max = -Infinity;

    for (let i = left; i <= right; i++) {
      let temp = i;

      while (boxes[temp + 1] === boxes[temp]) temp++;

      let cost = Math.pow(temp - i + 1, 2);
      cost += dfs(left, i - 1) + dfs(temp + 1, right);
      max = Math.max(max, cost);
      i = temp;
    }

    return max;
  };

  return dfs(0, boxes.length - 1);
};

console.log(removeBoxes([1, 3, 2, 2, 2, 3, 4, 3, 1]));

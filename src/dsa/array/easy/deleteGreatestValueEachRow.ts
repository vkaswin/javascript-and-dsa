/*

You are given an m x n matrix grid consisting of positive integers.
Perform the following operation until grid becomes empty:
Delete the element with the greatest value from each row. If multiple such elements exist, delete 
any of them. Add the maximum of deleted elements to the answer. Note that the number of columns 
decreases by one after each operation. Return the answer after performing the operations described above.

Input: grid = [[1,2,4],[3,3,1]]
Output: 8
Explanation: The diagram above shows the removed values in each step.
- In the first operation, we remove 4 from the first row and 3 from the second row (notice that, there are two cells with value 3 and we can remove any of them). We add 4 to the answer.
- In the second operation, we remove 2 from the first row and 3 from the second row. We add 3 to the answer.
- In the third operation, we remove 1 from the first row and 1 from the second row. We add 1 to the answer.
The final answer = 4 + 3 + 1 = 8.

*/

// recursive
const deleteGreatestValue = (grid: number[][]) => {
  let sum = 0;

  let findMaxValue = (): number => {
    let max = 0;
    let row = grid.length;
    let col = grid[0].length;

    for (let i = 0; i < row; i++) {
      let index = 0;
      for (let j = 1; j < col; j++) {
        if (grid[i][j] > grid[i][index]) index = j;
      }
      if (grid[i][index] > max) max = grid[i][index];
      grid[i].splice(index, 1);
    }

    sum += max;

    return grid[0].length === 0 ? sum : findMaxValue();
  };

  return findMaxValue();
};

// alternative using sort
const deleteGreatestValue1 = (grid: number[][]) => {
  let sum = 0;
  grid.forEach((nums) => nums.sort((a, b) => a - b));
  while (grid[0].length) {
    let max: number[] = [];
    for (let row of grid) max.push(row.pop() as number);
    sum += Math.max(...max);
  }
  return sum;
};

console.log(
  deleteGreatestValue1([
    [1, 2, 4],
    [3, 3, 1],
  ])
);

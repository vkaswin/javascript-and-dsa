/*

There is an m x n grid, where (0, 0) is the top-left cell and (m - 1, n - 1) is the bottom-right cell. You are given an integer array startPos where startPos = [startrow, startcol] indicates that initially, a robot is at the cell (startrow, startcol). You are also given an integer array homePos where homePos = [homerow, homecol] indicates that its home is at the cell (homerow, homecol).

The robot needs to go to its home. It can move one cell in four directions: left, right, up, or down, and it can not move outside the boundary. Every move incurs some cost. You are further given two 0-indexed integer arrays: rowCosts of length m and colCosts of length n.

If the robot moves up or down into a cell whose row is r, then this move costs rowCosts[r].
If the robot moves left or right into a cell whose column is c, then this move costs colCosts[c].
Return the minimum total cost for this robot to return home.

Input: startPos = [1, 0], homePos = [2, 3], rowCosts = [5, 4, 3], colCosts = [8, 2, 6, 7]
Output: 18
Explanation: One optimal path is that:
Starting from (1, 0)
-> It goes down to (2, 0). This move costs rowCosts[2] = 3.
-> It goes right to (2, 1). This move costs colCosts[1] = 2.
-> It goes right to (2, 2). This move costs colCosts[2] = 6.
-> It goes right to (2, 3). This move costs colCosts[3] = 7.
The total cost is 3 + 2 + 6 + 7 = 18

*/

export const minCost = (
  startPos: number[],
  homePos: number[],
  rowCosts: number[],
  colCosts: number[]
) => {
  let minRow = Math.min(startPos[0], homePos[0]);
  let maxRow = Math.max(startPos[0], homePos[0]);

  let minCol = Math.min(startPos[1], homePos[1]);
  let maxCol = Math.max(startPos[1], homePos[1]);

  let sum = 0;

  for (let i = minRow; i <= maxRow; i++) {
    sum += rowCosts[i];
  }

  for (let i = minCol; i <= maxCol; i++) {
    sum += colCosts[i];
  }

  return sum - rowCosts[startPos[0]] - colCosts[startPos[1]];
};

export const minCostDp = (
  startPos: number[],
  homePos: number[],
  rowCosts: number[],
  colCosts: number[]
) => {
  let row = rowCosts.length;
  let col = colCosts.length;
  let dp = new Array(row + 1)
    .fill(0)
    .map(() => new Array(col + 1).fill(Infinity));
  let directions = [
    [0, 1, "R"],
    [0, -1, "L"],
    [1, 0, "B"],
    [-1, 0, "T"],
  ] as const;
  let queue = [[startPos[0], startPos[1], 0]];

  while (queue.length) {
    let next: number[][] = [];

    for (let [i, j, cost] of queue) {
      if (i === homePos[0] && j === homePos[1]) return cost;

      for (let [x, y, d] of directions) {
        x += i;
        y += j;

        if (x < 0 || y < 0 || x >= row || y >= col) continue;

        let newCost = d === "T" || d === "B" ? rowCosts[x] : colCosts[y];

        if (cost + newCost < dp[x][y]) {
          dp[x][y] = cost + newCost;
          next.push([x, y, dp[x][y]]);
        }
      }

      queue = next;
    }
  }
};

console.log(minCost([1, 0], [2, 3], [5, 4, 3], [8, 2, 6, 7]));

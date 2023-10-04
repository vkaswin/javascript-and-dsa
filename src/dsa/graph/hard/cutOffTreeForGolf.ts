/*

You are asked to cut off all the trees in a forest for a golf event. The forest is represented as an m x n matrix. In this matrix:

0 means the cell cannot be walked through.
1 represents an empty cell that can be walked through.
A number greater than 1 represents a tree in a cell that can be walked through, and this number is the tree's height.
In one step, you can walk in any of the four directions: north, east, south, and west. If you are standing in a cell with a tree, you can choose whether to cut it off.

You must cut off the trees in order from shortest to tallest. When you cut off a tree, the value at its cell becomes 1 (an empty cell).

Starting from the point (0, 0), return the minimum steps you need to walk to cut off all the trees. If you cannot cut off all the trees, return -1.

Note: The input is generated such that no two trees have the same height, and there is at least one tree needs to be cut off.

Input: forest = [[1,2,3],[0,0,4],[7,6,5]]
Output: 6
Explanation: Following the path above allows you to cut off the trees from shortest to tallest in 6 steps.

*/

export const cutOffTree = (forest: number[][]) => {
  if (!forest[0][0]) return -1;

  let row = forest.length;
  let col = forest[0].length;
  let trees: number[][] = [];
  let directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  let steps = 0;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (forest[i][j] > 1) trees.push([i, j, forest[i][j]]);
    }
  }

  trees.sort((a, b) => b[2] - a[2]);

  let bfs = (rowS: number, colS: number, rowE: number, colE: number) => {
    let queue: number[][] = [[rowS, colS]];
    let visited = new Set<string>();
    let steps = 0;

    while (queue.length) {
      let next: number[][] = [];

      for (let [i, j] of queue) {
        if (i === rowE && j === colE) return steps;
        let key = `${i},${j}`;
        if (visited.has(key)) continue;
        visited.add(key);

        for (let [x, y] of directions) {
          x += i;
          y += j;
          if (x < 0 || y < 0 || x >= row || y >= col || !forest[x][y]) continue;
          next.push([x, y]);
        }
      }

      queue = next;
      steps++;
    }

    return -1;
  };

  let rowS = 0;
  let colS = 0;

  while (trees.length) {
    let [rowE, colE] = trees.pop()!;
    let minSteps = bfs(rowS, colS, rowE, colE);
    if (minSteps === -1) return -1;
    steps += minSteps;
    rowS = rowE;
    colS = colE;
  }

  return steps;
};

console.log(
  cutOffTree([
    [2, 3, 4],
    [0, 0, 5],
    [8, 7, 6],
  ])
);

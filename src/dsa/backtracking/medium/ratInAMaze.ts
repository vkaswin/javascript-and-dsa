/*

Consider a rat placed at (0, 0) in a square matrix of order N * N. It has to reach the destination at (N - 1, N - 1). Find all possible paths that the rat can take to reach from source to destination. The directions in which the rat can move are 'U'(up), 'D'(down), 'L' (left), 'R' (right). Value 0 at a cell in the matrix represents that it is blocked and rat cannot move to it while value 1 at a cell in the matrix represents that rat can be travel through it.
Note: In a path, no cell can be visited more than one time. If the source cell is 0, the rat cannot move to any other cell.

Input:
grid = [[1, 0, 0, 0],
         [1, 1, 0, 1], 
         [1, 1, 0, 0],
         [0, 1, 1, 1]]
Output:
DDRDRR DRDDRR
Explanation:
The rat can reach the destination at 
(3, 3) from (0, 0) by two paths - DRDDRR 
and DDRDRR, when printed in sorted order 
we get DDRDRR DRDDRR.

*/

export const findPath = (grid: number[][]) => {
  let result: string[] = [];

  if (grid[0][0] === 0) return result;

  let n = grid.length;

  let directions: [number, number, string][] = [
    [1, 0, "D"],
    [-1, 0, "U"],
    [0, 1, "R"],
    [0, -1, "L"],
  ];
  let visited = new Set<string>();

  let isValid = (i: number, j: number) => {
    return !(
      i < 0 ||
      j < 0 ||
      i >= n ||
      j >= n ||
      visited.has(i + "," + j) ||
      grid[i][j] === 0
    );
  };

  let dfs = (i: number, j: number, path: string[]) => {
    if (i === n - 1 && j === n - 1) {
      result.push(path.join(""));
      return;
    }

    for (let [x, y, dir] of directions) {
      x += i;
      y += j;

      if (!isValid(x, y)) continue;

      let key = x + "," + y;
      visited.add(key);
      path.push(dir);
      dfs(x, y, path);
      path.pop();
      visited.delete(key);
    }
  };

  visited.add("0,0");

  dfs(0, 0, []);

  return result;
};

console.log(
  findPath([
    [1, 0, 0, 0],
    [1, 1, 0, 1],
    [1, 1, 0, 0],
    [0, 1, 1, 1],
  ])
);

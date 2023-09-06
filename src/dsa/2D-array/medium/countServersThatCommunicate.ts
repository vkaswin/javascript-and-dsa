/*

You are given a map of a server center, represented as a m * n integer matrix grid, where 1 means that on that cell there is a server and 0 means that it is no server. Two servers are said to communicate if they are on the same row or on the same column.

Return the number of servers that communicate with any other server.

Input: grid = [[1,1,0,0],[0,0,1,0],[0,0,1,0],[0,0,0,1]]
Output: 4
Explanation: The two servers in the first row can communicate with each other. The two servers in the third column can communicate with each other. The server at right bottom corner can't communicate with any other server.

*/

export const countServers = (grid: number[][]) => {
  let rows = new Map();
  let cols = new Map();
  let servers: number[][] = [];
  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    rows.set(i, 0);
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 0) continue;

      if (!cols.has(j)) cols.set(j, 0);

      rows.set(i, rows.get(i)! + 1);
      cols.set(j, cols.get(j)! + 1);
      servers.push([i, j]);
    }
  }

  for (let [i, j] of servers) {
    if (rows.get(i) > 1 || cols.get(j) > 1) count++;
  }

  return count;
};

console.log(
  countServers([
    [1, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
  ])
);

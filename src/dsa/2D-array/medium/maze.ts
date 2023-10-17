/*

There is a ball in a maze with empty spaces and walls. The ball can go through empty spaces by rolling up, down, left or right, but it won't stop rolling until hitting a wall. When the ball stops, it could choose the next direction.

Given the ball's start position, the destination and the maze, determine whether the ball could stop at the destination.

The maze is represented by a binary 2D array. 1 means the wall and 0 means the empty space. You may assume that the borders of the maze are all walls. The start and destination coordinates are represented by row and column indexes.

Input:
map = 
[
 [0,0,1,0,0],
 [0,0,0,0,0],
 [0,0,0,1,0],
 [1,1,0,1,1],
 [0,0,0,0,0]
]
start = [0,4]
end = [3,2]

Output:
false

*/

export const hasPath = (
  maze: number[][],
  start: number[],
  destination: number[]
) => {
  let row = maze.length;
  let col = maze[0].length;
  let directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  let queue = [[start[0], start[1]]];
  let visited = new Set();

  while (queue.length) {
    let next: number[][] = [];

    for (let [i, j] of queue) {
      if (i === destination[0] && j === destination[1]) return true;

      let key = `${i},${j}`;

      if (visited.has(key)) continue;

      visited.add(key);

      for (let [x, y] of directions) {
        let m = i;
        let n = j;

        while (
          m + x >= 0 &&
          n + y >= 0 &&
          m + x < row &&
          n + y < col &&
          maze[m + x][n + y] !== 1
        ) {
          m += x;
          n += y;
        }

        next.push([m, n]);
      }
    }

    queue = next;
  }

  return false;
};

console.log(
  hasPath(
    [
      [0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 1, 0],
      [1, 1, 0, 1, 1],
      [0, 0, 0, 0, 0],
    ],
    [0, 4],
    [3, 2]
  )
);

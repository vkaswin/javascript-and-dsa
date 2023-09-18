/*

You are given an m x n grid grid where:

'.' is an empty cell.
'#' is a wall.
'@' is the starting point.
Lowercase letters represent keys.
Uppercase letters represent locks.
You start at the starting point and one move consists of walking one space in one of the four cardinal directions. You cannot walk outside the grid, or walk into a wall.

If you walk over a key, you can pick it up and you cannot walk over a lock unless you have its corresponding key.

For some 1 <= k <= 6, there is exactly one lowercase and one uppercase letter of the first k letters of the English alphabet in the grid. This means that there is exactly one key for each lock, and one lock for each key; and also that the letters used to represent the keys and locks were chosen in the same order as the English alphabet.

Return the lowest number of moves to acquire all keys. If it is impossible, return -1.

Input: grid = ["@.a..","###.#","b.A.B"]
Output: 8
Explanation: Note that the goal is to obtain all the keys not to open all the locks.

*/

export const shortestPathAllKeys = (grid: string[]) => {
  let totalKeys = 0;
  let row = grid.length;
  let col = grid[0].length;
  let queue: [number, number, Set<string>][] = [];
  let visited = new Set<string>();
  let directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  let moves = 0;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      let char = grid[i][j];
      if (char === "@") queue.push([i, j, new Set()]);
      else if (char !== "." && char !== "#" && char === char.toLowerCase())
        totalKeys++;
    }
  }

  while (queue.length) {
    let next: [number, number, Set<string>][] = [];

    for (let [i, j, keys] of queue) {
      let key = `${i},${j},${[...keys].toString()}`;

      if (visited.has(key)) continue;

      if (
        grid[i][j] !== "." &&
        grid[i][j] !== "@" &&
        grid[i][j] === grid[i][j].toLocaleLowerCase()
      ) {
        keys.add(grid[i][j]);
      }

      if (keys.size === totalKeys) return moves;

      visited.add(key);

      for (let [x, y] of directions) {
        x += i;
        y += j;

        if (
          x < 0 ||
          y < 0 ||
          x >= row ||
          y >= col ||
          grid[x][y] === "#" ||
          (grid[x][y] !== "." &&
            grid[x][y] !== "@" &&
            grid[x][y] === grid[x][y].toUpperCase() &&
            !keys.has(grid[x][y].toLowerCase()))
        )
          continue;

        next.push([x, y, new Set(keys)]);
      }
    }

    queue = next;
    moves++;
  }

  return -1;
};

console.log(
  shortestPathAllKeys([
    ".#.#..#.b...............#.#..#",
    ".#..##.........#......d.......",
    "..#...e.#.##....##.....#.....#",
    "..#..#.#.#.##..........#.....#",
    "...#...##....#.....#..........",
    "#........###....#..#.........f",
    "...............#......#...#...",
    "..........##.#...#.E..#......#",
    ".#...##...#.##.D....##..#.....",
    ".......#...........#....#..##.",
    "...#..........##.....#.......#",
    ".F#....#......#...............",
    "..##.#.#.....#..##...#.#.....#",
    ".............##..##..#.#......",
    "#..@..#.#.......#..........#..",
    ".........##..................#",
    ".#.......##...##..#.......#...",
    ".......#.#...A.a......#.##.#..",
    ".......#......##..#.###.#.....",
    ".##.#....##...#.#.....#.#.....",
    ".#.....#.c..#.....#......#..##",
    "##.....##........B.#.......#.#",
    ".....#...#....#..##...........",
    "#.#.##.#....#.#...............",
    ".#.#..#.####............#.....",
    "#.#..........###.#........#...",
    "..#..#.........#.......#..#.##",
    "..#..#C#...............#......",
    ".........#.##.##......#.#.....",
    "..#........##.#..##.#.....#.#.",
  ])
);

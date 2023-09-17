/*

You are a hiker preparing for an upcoming hike. You are given heights, a 2D array of size rows x columns, where heights[row][col] represents the height of cell (row, col). You are situated in the top-left cell, (0, 0), and you hope to travel to the bottom-right cell, (rows-1, columns-1) (i.e., 0-indexed). You can move up, down, left, or right, and you wish to find a route that requires the minimum effort.

A route's effort is the maximum absolute difference in heights between two consecutive cells of the route.

Return the minimum effort required to travel from the top-left cell to the bottom-right cell.

Input: heights = [[1,2,2],[3,8,2],[5,3,5]]
Output: 2
Explanation: The route of [1,3,5,3,5] has a maximum absolute difference of 2 in consecutive cells.
This is better than the route of [1,2,2,2,5], where the maximum absolute difference is 3.

*/

export class MinHeap {
  heap: number[][] = [];

  getParentIndex(i: number) {
    return Math.floor((i - 1) / 2);
  }

  getLeftChildIndex(i: number) {
    return 2 * i + 1;
  }

  getRightChildIndex(i: number) {
    return 2 * i + 2;
  }

  insert(value: number[]) {
    this.heap.push(value);
    let index = this.heap.length - 1;

    if (index === 0) return;

    let parent = this.getParentIndex(index);

    while (
      this.heap[index] &&
      this.heap[parent] &&
      this.heap[index][2] < this.heap[parent][2]
    ) {
      [this.heap[index], this.heap[parent]] = [
        this.heap[parent],
        this.heap[index],
      ];
      index = this.getParentIndex(index);
      parent = this.getParentIndex(index);
    }
  }

  remove() {
    if (!this.heap.length) return;

    if (this.heap.length === 1) return this.heap.pop();

    [this.heap[0], this.heap[this.heap.length - 1]] = [
      this.heap[this.heap.length - 1],
      this.heap[0],
    ];

    let min = this.heap.pop();
    let index = 0;
    let left = this.getLeftChildIndex(index);
    let right = this.getRightChildIndex(index);

    while (
      this.heap[index]?.[2] > this.heap[left]?.[2] ||
      this.heap[index]?.[2] > this.heap[right]?.[2]
    ) {
      if (
        this.heap[right] === undefined ||
        this.heap[left][2] < this.heap[right][2]
      ) {
        if (this.heap[left]) {
          [this.heap[index], this.heap[left]] = [
            this.heap[left],
            this.heap[index],
          ];
        }
        index = left;
      } else {
        if (this.heap[right]) {
          [this.heap[index], this.heap[right]] = [
            this.heap[right],
            this.heap[index],
          ];
        }
        index = right;
      }
      left = this.getLeftChildIndex(index);
      right = this.getRightChildIndex(index);
    }

    return min;
  }

  get length() {
    return this.heap.length;
  }
}

export const minimumEffortPath = (heights: number[][]) => {
  let row = heights.length;
  let col = heights[0].length;
  let directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  let vistied = new Set<string>();
  let heap = new MinHeap();
  heap.insert([0, 0, 0]);

  while (heap.length) {
    let [i, j, effort] = heap.remove()!;

    let key = `${i},${j}`;

    if (vistied.has(key)) continue;

    if (i === row - 1 && j === col - 1) return effort;

    vistied.add(key);

    for (let [x, y] of directions) {
      x += i;
      y += j;

      if (x < 0 || y < 0 || x >= row || y >= col) continue;

      heap.insert([
        x,
        y,
        Math.max(effort, Math.abs(heights[i][j] - heights[x][y])),
      ]);
    }
  }

  return -1;
};

console.log(
  minimumEffortPath([
    [1, 2, 2],
    [3, 8, 2],
    [5, 3, 5],
  ])
);

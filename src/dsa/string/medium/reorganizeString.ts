/*

Given a string s, rearrange the characters of s so that any two adjacent characters are not the same.

Return any possible rearrangement of s or return "" if not possible.

Input: s = "aab"
Output: "aba"

*/

export class MaxHeap {
  heap: [string, number][] = [];

  getParent(i: number) {
    return Math.floor((i - 1) / 2);
  }

  getLeftChild(i: number) {
    return 2 * i + 1;
  }

  getRightChild(i: number) {
    return 2 * i + 2;
  }

  insert(val: [string, number]) {
    this.heap.push(val);

    if (this.heap.length === 1) return;

    let index = this.heap.length - 1;
    let parent = this.getParent(index);

    while (this.heap[parent]?.[1] < this.heap[index]?.[1]) {
      [this.heap[parent], this.heap[index]] = [
        this.heap[index],
        this.heap[parent],
      ];
      index = parent;
      parent = this.getParent(index);
    }
  }

  remove() {
    if (this.heap.length === 1) return this.heap.pop();

    [this.heap[this.heap.length - 1], this.heap[0]] = [
      this.heap[0],
      this.heap[this.heap.length - 1],
    ];

    let minValue = this.heap.pop();

    let parent = 0;
    let left = this.getLeftChild(parent);
    let right = this.getRightChild(parent);

    while (
      this.heap[left]?.[1] > this.heap[parent]?.[1] ||
      this.heap[right]?.[1] > this.heap[parent]?.[1]
    ) {
      if (
        this.heap[right] === undefined ||
        this.heap[left]?.[1] > this.heap[right]?.[1]
      ) {
        if (this.heap[left] !== undefined) {
          [this.heap[left], this.heap[parent]] = [
            this.heap[parent],
            this.heap[left],
          ];
        }
        parent = left;
      } else {
        if (this.heap[right] !== undefined) {
          [this.heap[right], this.heap[parent]] = [
            this.heap[parent],
            this.heap[right],
          ];
        }
        parent = right;
      }

      left = this.getLeftChild(parent);
      right = this.getRightChild(parent);
    }

    return minValue;
  }

  getPeak() {
    return this.heap[0];
  }

  get length() {
    return this.heap.length;
  }
}

export const reorganizeString = (s: string) => {
  let heap = new MaxHeap();
  let freq = new Map<string, number>();

  for (let char of s) {
    freq.set(char, (freq.get(char) || 0) + 1);
  }

  for (let val of freq.entries()) {
    heap.insert(val);
  }

  let result = "";
  let prev: [string, number] | null = null;

  while (heap.length || prev) {
    if (!heap.length && prev) return "";

    let [char, count] = heap.remove()!;
    result += char;
    count--;

    if (prev) {
      heap.insert(prev);
      prev = null;
    }

    if (count) prev = [char, count];
  }

  return result;
};

console.log(reorganizeString("aaab"));

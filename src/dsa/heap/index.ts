export class MaxHeap<T> {
  heap: T[] = [];

  constructor(public cb?: (val: T) => number) {}

  getValue(i: number) {
    if (!this.cb) return this.heap[i];

    return this.heap[i] ? this.cb(this.heap[i]) : Infinity;
  }

  getParentIndex(i: number) {
    return Math.floor((i - 1) / 2);
  }

  getLeftChildIndex(i: number) {
    return 2 * i + 1;
  }

  getRightChidIndex(i: number) {
    return 2 * i + 2;
  }

  insert(num: T) {
    this.heap.push(num);
    let index = this.heap.length - 1;

    if (index === 0) return;

    let parent = this.getParentIndex(index);

    while (this.getValue(index) > this.getValue(parent)) {
      [this.heap[index], this.heap[parent]] = [
        this.heap[parent],
        this.heap[index],
      ];
      index = parent;
      parent = this.getParentIndex(index);
    }
  }

  remove() {
    if (this.heap.length === 1) return this.heap.pop();

    let index = 0;
    let minValue = this.heap[index];
    this.heap[index] = this.heap.pop()!;
    let leftChild = this.getLeftChildIndex(index);
    let rightChild = this.getRightChidIndex(index);

    while (
      this.getValue(index) < this.getValue(leftChild) ||
      this.getValue(index) < this.getValue(rightChild)
    ) {
      if (
        this.heap[rightChild] === undefined ||
        this.getValue(leftChild) > this.getValue(rightChild)
      ) {
        if (this.heap[leftChild] !== undefined) {
          [this.heap[index], this.heap[leftChild]] = [
            this.heap[leftChild],
            this.heap[index],
          ];
        }
        index = this.getLeftChildIndex(index);
      } else {
        if (this.heap[rightChild] !== undefined) {
          [this.heap[index], this.heap[rightChild]] = [
            this.heap[rightChild],
            this.heap[index],
          ];
        }

        index = this.getRightChidIndex(index);
      }

      leftChild = this.getLeftChildIndex(index);
      rightChild = this.getRightChidIndex(index);
    }

    return minValue;
  }

  sort() {
    let result = [];
    while (this.heap.length) {
      result.push(this.remove());
    }
    return result;
  }

  get size() {
    return this.heap.length;
  }

  peak() {
    return this.heap[0];
  }
}

export class MinHeap<T> {
  heap: T[] = [];

  constructor(public cb?: (val: T) => number) {}

  getValue(i: number) {
    if (!this.cb) return this.heap[i];

    return this.heap[i] ? this.cb(this.heap[i]) : -Infinity;
  }

  getParentIndex(i: number) {
    return Math.floor((i - 1) / 2);
  }

  getLeftChildIndex(i: number) {
    return 2 * i + 1;
  }

  getRightChidIndex(i: number) {
    return 2 * i + 2;
  }

  insert(num: T) {
    this.heap.push(num);
    let index = this.heap.length - 1;

    if (index === 0) return;

    let parent = this.getParentIndex(index);

    while (this.getValue(index) < this.getValue(parent)) {
      [this.heap[index], this.heap[parent]] = [
        this.heap[parent],
        this.heap[index],
      ];
      index = parent;
      parent = this.getParentIndex(index);
    }
  }

  remove() {
    if (this.heap.length === 1) return this.heap.pop();

    let index = 0;
    let minValue = this.heap[index];
    this.heap[index] = this.heap.pop()!;
    let leftChild = this.getLeftChildIndex(index);
    let rightChild = this.getRightChidIndex(index);

    while (
      this.getValue(index) > this.getValue(leftChild) ||
      this.getValue(index) > this.getValue(rightChild)
    ) {
      if (
        this.heap[rightChild] === undefined ||
        this.getValue(leftChild) < this.getValue(rightChild)
      ) {
        if (this.heap[leftChild] !== undefined) {
          [this.heap[index], this.heap[leftChild]] = [
            this.heap[leftChild],
            this.heap[index],
          ];
        }
        index = this.getLeftChildIndex(index);
      } else {
        if (this.heap[rightChild] !== undefined) {
          [this.heap[index], this.heap[rightChild]] = [
            this.heap[rightChild],
            this.heap[index],
          ];
        }

        index = this.getRightChidIndex(index);
      }

      leftChild = this.getLeftChildIndex(index);
      rightChild = this.getRightChidIndex(index);
    }

    return minValue;
  }

  sort() {
    let result = [];
    while (this.heap.length) {
      result.push(this.remove());
    }
    return result;
  }

  get size() {
    return this.heap.length;
  }

  peak() {
    return this.heap[0];
  }
}

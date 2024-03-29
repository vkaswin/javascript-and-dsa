export class MaxHeap {
  heap: number[] = [];

  getParentIndex(i: number) {
    return Math.floor((i - 1) / 2);
  }

  getLeftChildIndex(i: number) {
    return 2 * i + 1;
  }

  getRightChildIndex(i: number) {
    return 2 * i + 2;
  }

  insert(num: number) {
    this.heap.push(num);
    let index = this.heap.length - 1;

    if (index === 0) return;

    while (this.heap[index] > this.heap[this.getParentIndex(index)]) {
      [this.heap[index], this.heap[this.getParentIndex(index)]] = [
        this.heap[this.getParentIndex(index)],
        this.heap[index],
      ];
      index = this.getParentIndex(index);
    }
  }

  remove() {
    if (this.heap.length === 1) return this.heap.pop()!;
    let index = 0;
    let maxValue = this.heap[index];
    this.heap[index] = this.heap.pop()!;
    let leftChild = this.getLeftChildIndex(index);
    let rightChild = this.getRightChildIndex(index);

    while (
      this.heap[index] < this.heap[leftChild] ||
      this.heap[index] < this.heap[rightChild]
    ) {
      if (
        this.heap[rightChild] === undefined ||
        this.heap[leftChild] > this.heap[rightChild]
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

        index = this.getRightChildIndex(index);
      }

      leftChild = this.getLeftChildIndex(index);
      rightChild = this.getRightChildIndex(index);
    }

    return maxValue;
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
}

/*
let heap = new MaxHeap();
heap.insert(12);
heap.insert(15);
heap.insert(16);
heap.insert(7);
heap.insert(20);
heap.insert(9);
heap.insert(18);
heap.insert(5);
console.log(heap.sort(), heap);
*/

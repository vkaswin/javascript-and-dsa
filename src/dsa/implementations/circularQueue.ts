export class CircularQueue {
  queue: (number | undefined)[];
  front = 0;
  rear = -1;
  length = 0;

  constructor(public size: number) {
    this.queue = new Array(size);
  }

  enQueue(value: number) {
    if (this.isFull()) return;
    this.rear = (this.rear + 1) % this.size;
    this.queue[this.rear] = value;
    this.length++;
  }

  deQueue() {
    if (this.isEmpty()) return;
    let value = this.queue[this.front];
    this.queue[this.front] = undefined;
    this.front = (this.front + 1) % this.size;
    this.length--;
    return value;
  }

  peek() {
    if (this.isEmpty()) return;
    return this.queue[this.rear];
  }

  getSize() {
    return this.length;
  }

  isEmpty(): boolean {
    return this.length === 0;
  }

  isFull(): boolean {
    return this.length === this.size;
  }

  print() {
    if (this.isEmpty()) return;
    let i;
    let str = "";
    for (i = this.front; i !== this.rear; i = (i + 1) % this.size) {
      str += "," + this.queue[i];
    }
    str += "," + this.queue[i];
    return str.substring(1);
  }
}

const queue = new CircularQueue(3);
console.log(queue.isEmpty());
queue.enQueue(1);
queue.enQueue(2);
queue.enQueue(3);
queue.deQueue();
queue.enQueue(4);
queue.enQueue(40);
queue.enQueue(50);
queue.deQueue();
queue.deQueue();
console.log(queue.getSize());
console.log(queue.print());
console.log(queue.isFull());
console.log(queue.peek());
console.log(queue.print());
queue.enQueue(60);
console.log(queue.print());
queue.deQueue();
console.log(queue.print());

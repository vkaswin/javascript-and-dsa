export class Dequeue {
  map = new Map<number, number>();
  front = 0;
  rear = 0;

  push(num: number) {
    this.map.set(this.front++, num);
  }

  pop() {
    if (!this.size) return;
    let num = this.map.get(this.front - 1);
    this.map.delete(--this.front);
    return num;
  }

  shift() {
    if (!this.size) return;
    let num = this.map.get(this.rear);
    this.map.delete(this.rear++);
    return num;
  }

  last() {
    return this.map.get(this.front - 1);
  }

  first() {
    return this.map.get(this.rear);
  }

  get size() {
    return this.map.size;
  }
}

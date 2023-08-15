class MinStack {
  private arr: { val: number; min: number }[] = [];

  constructor() {}

  push(val: number) {
    if (this.arr.length === 0) {
      this.arr.push({ val, min: val });
    } else {
      let min = this.getMin();
      this.arr.push({ val, min: val < min ? val : min });
    }
  }

  pop() {
    this.arr.pop();
  }

  top() {
    return this.arr[this.arr.length - 1].val;
  }

  getMin() {
    return this.arr[this.arr.length - 1].min;
  }
}

let minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // return -3
minStack.pop();
minStack.top(); // return 0
console.log(minStack.getMin()); // return -2
console.log(minStack);

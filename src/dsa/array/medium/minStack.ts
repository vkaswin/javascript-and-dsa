class MinStack {
  private list: { val: number; min: number }[] = [];

  constructor() {}

  push(val: number) {
    let min = this.getMin() ?? Infinity;
    this.list.push({
      val: val,
      min: val < min ? val : min,
    });
  }

  pop() {
    this.list.pop();
  }

  private last() {
    return this.list[this.list.length - 1];
  }

  top() {
    return this.last().val;
  }

  getMin() {
    return this.last()?.min;
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

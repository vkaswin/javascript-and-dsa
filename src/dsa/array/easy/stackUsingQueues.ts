/*

Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).

Implement the MyStack class:

void push(int x) Pushes element x to the top of the stack.
int pop() Removes the element on the top of the stack and returns it.
int top() Returns the element on the top of the stack.
boolean empty() Returns true if the stack is empty, false otherwise.
Notes:

You must use only standard operations of a queue, which means that only push to back, peek/pop from front, size and is empty operations are valid.
Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue) as long as you use only a queue's standard operations.

*/

class MyStack {
  queue1: number[] = [];
  queue2: number[] = [];

  push(x: number): void {
    this.queue1.push(x);
  }

  pop(): number {
    if (!this.queue2.length) {
      for (let i = this.queue1.length - 1; i >= 0; i--) {
        this.queue2.push(this.queue1[i]);
      }
      this.queue1.length = 0;
    }

    return this.queue2.shift()!;
  }

  top(): number {
    if (this.queue2.length) return this.queue2[0];
    return this.queue1[this.queue1.length - 1];
  }

  empty(): boolean {
    return this.queue1.length === 0 && this.queue2.length === 0;
  }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

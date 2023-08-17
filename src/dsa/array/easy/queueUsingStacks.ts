/*

Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

Implement the MyQueue class:

void push(int x) Pushes element x to the back of the queue.
int pop() Removes the element from the front of the queue and returns it.
int peek() Returns the element at the front of the queue.
boolean empty() Returns true if the queue is empty, false otherwise.
Notes:

You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.

*/

export class MyQueue {
  stack1: number[] = [];
  stack2: number[] = [];

  push(x: number): void {
    this.stack1.push(x);
  }

  pop(): number {
    if (this.stack2.length) return this.stack2.pop()!;

    while (this.stack1.length) {
      this.stack2.push(this.stack1.pop()!);
    }

    return this.stack2.pop()!;
  }

  peek(): number {
    if (this.stack2.length) return this.stack2[this.stack2.length - 1];
    return this.stack1[0];
  }

  empty(): boolean {
    return this.stack1.length === 0 && this.stack2.length === 0;
  }
}

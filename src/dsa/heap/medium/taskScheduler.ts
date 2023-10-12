/*

Given a characters array tasks, representing the tasks a CPU needs to do, where each letter represents a different task. Tasks could be done in any order. Each task is done in one unit of time. For each unit of time, the CPU could complete either one task or just be idle.

However, there is a non-negative integer n that represents the cooldown period between two same tasks (the same letter in the array), that is that there must be at least n units of time between any two same tasks.

Return the least number of units of times that the CPU will take to finish all the given tasks.

Input: tasks = ["A","A","A","B","B","B"], n = 2
Output: 8
Explanation: 
A -> B -> idle -> A -> B -> idle -> A -> B
There is at least 2 units of time between any two same tasks.

*/

import { MaxHeap } from "@/dsa/heap";

export const leastInterval = (tasks: string[], n: number) => {
  let time = 0;
  let freq: Record<string, number> = {};
  let heap = new MaxHeap<number>();
  let queue: [number, number][] = [];

  for (let task of tasks) {
    freq[task] = (freq[task] || 0) + 1;
  }

  for (let key in freq) {
    heap.insert(freq[key]);
  }

  while (heap.size || queue.length) {
    time++;

    if (heap.size) {
      let max = heap.remove()! - 1;
      if (max > 0) queue.push([max, time + n]);
    }

    if (queue.length && queue[0][1] === time) {
      let task = queue.shift()!;
      heap.insert(task[0]);
    }
  }

  return time;
};

console.log(leastInterval(["A", "A", "A", "B", "B", "B"], 3));

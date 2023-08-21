/*

You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

Return the max sliding window.

Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
Explanation: 
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7

*/

class Dequeue {
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

  peekLast() {
    return this.map.get(this.front - 1);
  }

  peekFirst() {
    return this.map.get(this.rear);
  }

  get size() {
    return this.map.size;
  }
}

export const maxSlidingWindow = (nums: number[], k: number) => {
  let dequeue = new Dequeue();
  let result: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    if (dequeue.size && dequeue.peekFirst()! === i - k) {
      dequeue.shift();
    }

    while (dequeue.size && nums[i] >= nums[dequeue.peekLast()!]) {
      dequeue.pop();
    }

    dequeue.push(i);

    if (i >= k - 1) {
      result.push(nums[dequeue.peekFirst()!]);
    }
  }

  return result;
};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));

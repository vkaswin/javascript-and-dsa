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

import { Dequeue } from "@/dsa/implementations/dequeue";

export const maxSlidingWindow = (nums: number[], k: number) => {
  let dequeue = new Dequeue();
  let result: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    if (dequeue.size && i - k === dequeue.first()) dequeue.shift();

    while (dequeue.size && nums[i] >= nums[dequeue.last()!]) {
      dequeue.pop();
    }

    dequeue.push(i);

    if (i + 1 >= k) result.push(nums[dequeue.first()!]);
  }

  return result;
};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));

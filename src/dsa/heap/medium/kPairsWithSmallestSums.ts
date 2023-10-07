/*

You are given two integer arrays nums1 and nums2 sorted in non-decreasing order and an integer k.

Define a pair (u, v) which consists of one element from the first array and one element from the second array.

Return the k pairs (u1, v1), (u2, v2), ..., (uk, vk) with the smallest sums.

Input: nums1 = [1,7,11], nums2 = [2,4,6], k = 3
Output: [[1,2],[1,4],[1,6]]
Explanation: The first 3 pairs are returned from the sequence: [1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]

*/

import { MaxHeap } from "../index";

function kSmallestPairs(nums1: number[], nums2: number[], k: number) {
  let result: number[][] = [];
  let heap = new MaxHeap<number[]>((arr) => arr[0] + arr[1]);

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      let arr = heap.peak();
      if (heap.size < k) heap.insert([nums1[i], nums2[j]]);
      else if (nums1[i] + nums2[j] < arr[0] + arr[1]) {
        heap.remove();
        heap.insert([nums1[i], nums2[j]]);
      } else {
        break;
      }
    }
  }

  while (heap.size && result.length !== k) {
    result.push(heap.remove()!);
  }

  return result;
}

console.log(kSmallestPairs([1, 7, 11], [2, 4, 6], 3));

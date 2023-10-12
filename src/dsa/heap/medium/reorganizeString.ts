/*

Given a string s, rearrange the characters of s so that any two adjacent characters are not the same.

Return any possible rearrangement of s or return "" if not possible.

Input: s = "aab"
Output: "aba"

*/

import { MaxHeap } from "@/dsa/heap";

export const reorganizeString = (s: string) => {
  let heap = new MaxHeap<[string, number]>((val) => val[1]);
  let freq = new Map<string, number>();

  for (let char of s) {
    freq.set(char, (freq.get(char) || 0) + 1);
  }

  for (let val of freq.entries()) {
    heap.insert(val);
  }

  let result = "";
  let prev: [string, number] | null = null;

  while (heap.size || prev) {
    if (!heap.size && prev) return "";

    let [char, count] = heap.remove()!;
    result += char;
    count--;

    if (prev) {
      heap.insert(prev);
      prev = null;
    }

    if (count) prev = [char, count];
  }

  return result;
};

console.log(reorganizeString("aaab"));

/*

You are given an array of binary strings strs and two integers m and n.

Return the size of the largest subset of strs such that there are at most m 0's and n 1's in the subset.

A set x is a subset of a set y if all elements of x are also elements of y.

Input: strs = ["10","0001","111001","1","0"], m = 5, n = 3
Output: 4
Explanation: The largest subset with at most 5 0's and 3 1's is {"10", "0001", "1", "0"}, so the answer is 4.
Other valid but smaller subsets include {"0001", "1"} and {"10", "1", "0"}.
{"111001"} is an invalid subset because it contains 4 1's, greater than the maximum of 3.

*/

export const findMaxForm = (strs: string[], m: number, n: number) => {
  let arr: number[][] = [];
  let cache: Record<string, number> = {};

  for (let str of strs) {
    let count: number[] = [0, 0];
    for (let char of str) {
      if (char === "0") count[0]++;
      if (char === "1") count[1]++;
    }
    arr.push(count);
  }

  let recurse = (index: number, m: number, n: number) => {
    let key = `${index},${m},${n}`;

    if (key in cache) return cache[key];

    if (index >= arr.length) return 0;

    cache[key] = recurse(index + 1, m, n);

    m -= arr[index][0];
    n -= arr[index][1];

    if (m >= 0 && n >= 0)
      cache[key] = Math.max(cache[key], 1 + recurse(index + 1, m, n));

    return cache[key];
  };

  return recurse(0, m, n);
};

console.log(findMaxForm(["10", "0001", "111001", "1", "0"], 5, 3));

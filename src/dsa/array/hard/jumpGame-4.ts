/*

Given an array of integers arr, you are initially positioned at the first index of the array.

In one step you can jump from index i to index:

i + 1 where: i + 1 < arr.length.
i - 1 where: i - 1 >= 0.
j where: arr[i] == arr[j] and i != j.
Return the minimum number of steps to reach the last index of the array.

Notice that you can not jump outside of the array at any time.

Input: arr = [100,-23,-23,404,100,23,23,23,3,404]
Output: 3
Explanation: You need three jumps from index 0 --> 4 --> 3 --> 9. Note that index 9 is the last index of the array.

*/

export const minJumps = (arr: number[]) => {
  let map = new Map<number, number[]>();
  let visited = new Set<number>();

  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) map.set(arr[i], []);
    map.get(arr[i])!.push(i);
  }

  let queue: number[] = [0];
  let jump = 0;

  while (queue.length) {
    let next: number[] = [];

    for (let index of queue) {
      if (visited.has(index)) continue;

      visited.add(index);

      if (index === arr.length - 1) return jump;

      if (index + 1 < arr.length) next.push(index + 1);

      if (index - 1 >= 0) next.push(index - 1);

      if (map.has(arr[index]) && map.get(arr[index])!.length) {
        for (let i of map.get(arr[index])!) {
          next.push(i);
        }
        map.delete(arr[index]);
      }
    }

    queue = next;
    jump++;
  }

  return jump;
};

console.log(minJumps([100, -23, -23, 404, 100, 23, 23, 23, 3, 404]));

/*

You are given a 0-indexed binary string s and two integers minJump and maxJump. In the beginning, you are standing at index 0, which is equal to '0'. You can move from index i to index j if the following conditions are fulfilled:

i + minJump <= j <= min(i + maxJump, s.length - 1), and
s[j] == '0'.
Return true if you can reach index s.length - 1 in s, or false otherwise.

Input: s = "011010", minJump = 2, maxJump = 3
Output: true
Explanation:
In the first step, move from index 0 to index 3. 
In the second step, move from index 3 to index 5.


*/

export const canReach = (s: string, minJump: number, maxJump: number) => {
  if (s[s.length - 1] !== "0") return false;

  let queue = [0];
  let covered = 0; // keep track of processed index to avoid repeated work

  while (queue.length) {
    let next = [];

    for (let i of queue) {
      let limit = Math.min(i + maxJump, s.length);

      for (let j = Math.max(i + minJump, covered); j <= limit; j++) {
        if (s[j] !== "0") continue;
        if (j === s.length - 1) return true;
        next.push(j);
      }

      covered = limit + 1;
    }

    queue = next;
  }

  return false;
};

console.log(canReach("011010", 2, 3));

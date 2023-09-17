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

  let cache: Record<string, boolean> = {};

  let recurse = (index: number, jump: number) => {
    let key = `${index},${jump}`;

    if (key in cache) return cache[key];

    if (index === s.length - 1) return true;

    if (index >= s.length) return false;

    for (let i = maxJump; i >= minJump; i--) {
      if (s[index + i] !== "0") continue;

      if (recurse(index + i, i)) return (cache[key] = true);
    }

    return (cache[key] = false);
  };

  return recurse(0, 0);
};

console.log(canReach("011010", 2, 3));

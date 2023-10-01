/*

There is only one character 'A' on the screen of a notepad. You can perform one of two operations on this notepad for each step:

Copy All: You can copy all the characters present on the screen (a partial copy is not allowed).
Paste: You can paste the characters which are copied last time.
Given an integer n, return the minimum number of operations to get the character 'A' exactly n times on the screen.

*/

export const minSteps = (n: number) => {
  let set = new Set<number>();

  let dfs = (length: number, copied: number): number => {
    if (length === n) return 0;

    set.add(copied);

    if (length > n) return Infinity;

    let copy = !set.has(length) ? dfs(length, length) : Infinity;
    let paste = copied > 0 ? dfs(length + copied, copied) : Infinity;

    return 1 + Math.min(copy, paste);
  };

  return dfs(1, 0);
};

console.log(minSteps(6));

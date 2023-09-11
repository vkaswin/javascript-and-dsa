export const canReach = (arr: number[], start: number) => {
  let visited = new Set<number>();

  let recurse = (index: number) => {
    if (visited.has(index)) return false;

    visited.add(index);

    if (index >= arr.length || index < 0) return false;

    if (arr[index] === 0) return true;

    if (recurse(index - arr[index]) || recurse(index + arr[index])) return true;

    return false;
  };

  return recurse(start);
};

console.log(canReach([4, 2, 3, 0, 3, 1, 2], 5));

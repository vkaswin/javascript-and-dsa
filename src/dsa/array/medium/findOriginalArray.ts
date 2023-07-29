export const findOriginalArray = (changed: number[]) => {
  if (changed.length % 2 !== 0) return [];

  let arr: number[] = [];
  let map = new Map<number, number>();

  changed.sort((a, b) => b - a);

  for (let curr of changed) {
    let double = curr * 2;

    if (map.has(double)) {
      arr.push(curr);
      map.set(double, (map.get(double) as number) - 1);
      if (map.get(double) === 0) map.delete(double);
    } else {
      map.set(curr, (map.get(curr) || 0) + 1);
    }
  }

  return arr.length === changed.length / 2 ? arr : [];
};

console.log(findOriginalArray([1, 3, 4, 2, 6, 8]));

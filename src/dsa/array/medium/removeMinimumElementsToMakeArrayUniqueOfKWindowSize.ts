export const removeMinElements = (
  list1: number[],
  list2: number[],
  k: number
): number[] => {
  let result = [];
  let j = 0;

  for (let i = 0; i < list1.length; i += k) {
    let set = new Set<number>(list1.slice(i, i + k));
    let nums: number[] = [];

    while (j < list2.length) {
      if (!set.has(list2[j])) nums.push(list2[j]);
      j++;
      if (nums.length === k) break;
    }

    result.push(...nums);
  }

  result.push(...list2.slice(j));

  return result;
};

console.log(removeMinElements([1, 2, 3, 4, 5, 6], [3, 1, 1, 2, 4, 5, 6, 1], 1)); // [3, 4, 5, 6, 1]

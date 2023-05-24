export const mostFrequentEven = (nums: number[]) => {
  let obj: Record<number, number> = {};

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 !== 0) continue;
    if (typeof obj[nums[i]] === "undefined") obj[nums[i]] = 1;
    obj[nums[i]] += 1;
  }

  let values = Object.values(obj);

  if (values.length === 0) return -1;

  let max = Math.max(...values);

  let frequent = Infinity;

  for (let key in obj) {
    if (obj[key] === max && +key < frequent) frequent = +key;
  }

  return frequent;
};

console.log(
  mostFrequentEven([
    8154, 9139, 8194, 3346, 5450, 9190, 133, 8239, 4606, 8671, 8412, 6290,
  ])
);

// Use Min Heap
export const totalCost = (costs: number[], k: number, candidates: number) => {
  let cost = 0;
  let left = costs.slice(0, candidates);
  let middle = costs.slice(candidates, costs.length - candidates);
  let right = costs.slice(costs.length - candidates);

  for (let i = 0; i < k; i++) {
    let leftMin = Math.min(...left);
    let rightMin = Math.min(...right);

    if (leftMin <= rightMin) {
      left.splice(left.indexOf(leftMin), 1);
      if (middle.length) left.push(middle.shift() as number);
      cost += leftMin;
    } else {
      right.splice(right.indexOf(rightMin), 1);
      if (middle.length) right.unshift(middle.pop() as number);
      cost += rightMin;
    }
  }

  return cost;
};

console.log(
  totalCost(
    [
      18, 64, 12, 21, 21, 78, 36, 58, 88, 58, 99, 26, 92, 91, 53, 10, 24, 25,
      20, 92, 73, 63, 51, 65, 87, 6, 17, 32, 14, 42, 46, 65, 43, 9, 75,
    ],
    13,
    23
  )
);

export const rearrangeSticks = (n: number, k: number) => {
  let visited = new Set();
  let mod = Math.pow(10, 9) + 7;
  let cache: Record<string, number> = {};

  let dfs = (visible: number, currMax: number) => {
    if (visited.size >= n) return Number(visible === k);

    let key = `${visited.size},${visible},${currMax}`;

    if (key in cache) return cache[key];

    let count = 0;

    for (let i = 1; i <= n; i++) {
      if (visited.has(i)) continue;
      visited.add(i);
      let isMax = i > currMax;
      count += dfs(isMax ? visible + 1 : visible, isMax ? i : currMax);
      visited.delete(i);
    }

    return (cache[key] = count % mod);
  };

  return dfs(0, -1);
};

console.log(rearrangeSticks(105, 23));

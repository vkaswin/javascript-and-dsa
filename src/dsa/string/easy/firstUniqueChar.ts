export const firstUniqChar = (s: string) => {
  let map = new Map<string, number>();

  for (let i = 0; i < s.length; i++) {
    map.set(s[i], map.has(s[i]) ? -1 : i);
  }

  for (let [_, value] of map) {
    if (value !== -1) return value;
  }

  return -1;
};

console.log(firstUniqChar("leetcode"));

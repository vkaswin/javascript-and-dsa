function numSplits(s: string): number {
  let left = new Map<string, number>();
  let right = new Map<string, number>();
  let count = 0;

  for (let char of s) {
    right.set(char, (right.get(char) || 0) + 1);
  }

  for (let char of s) {
    right.set(char, right.get(char)! - 1);
    if (right.get(char) === 0) right.delete(char);
    left.set(char, (left.get(char) || 0) + 1);
    if (left.size === right.size) count++;
  }

  return count;
}

console.log(numSplits("aacaba"));

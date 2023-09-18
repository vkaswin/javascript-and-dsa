function kSimilarity(s1: string, s2: string): number {
  if (s1 === s2) return 0;

  let index = 0;

  while (s1[index] === s2[index]) index++;

  let queue: [string, number][] = [[s1, index]];
  let visited = new Set();
  let swaps = 0;

  let getPossibleSwaps = (str: string, index: number) => {
    let result: [string, number][] = [];
    let arr = str.split("");

    for (let i = index; i < arr.length; i++) {
      if (arr[i] !== s2[index]) continue;

      [arr[index], arr[i]] = [arr[i], arr[index]];
      let str = arr.join("");
      [arr[index], arr[i]] = [arr[i], arr[index]];

      if (visited.has(str)) continue;

      let nextIndex = index + 1;
      while (nextIndex < s2.length && str[nextIndex] === s2[nextIndex])
        nextIndex++;

      result.push([str, nextIndex]);
    }

    return result;
  };

  while (queue.length) {
    let next: [string, number][] = [];
    for (let [word, index] of queue) {
      if (visited.has(word)) continue;
      if (word === s2) return swaps;
      visited.add(word);
      next.push(...getPossibleSwaps(word, index));
    }
    queue = next;
    swaps++;
  }

  return -1;
}

console.log(kSimilarity("abccaacceecdeea", "bcaacceeccdeaae"));

export const numOfSubarrays = (arr: number[]) => {
  let count = 0;

  let dfs = (index: number, sum: number) => {
    if (index >= arr.length) return;

    for (let i = index; i < arr.length; i++) {
      sum += arr[i];
      if (sum % 2 !== 0) {
        count++;
      }
      dfs(i + 1, sum);
      sum -= arr[i];
    }
  };

  dfs(0, 0);

  return count;
};

console.log(numOfSubarrays([1, 2, 3, 4, 5, 6, 7]));

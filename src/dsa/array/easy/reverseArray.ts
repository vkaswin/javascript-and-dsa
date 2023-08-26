export const reverse = (arr = [1, 2, 3, 4, 5, 6]) => {
  for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
};

console.log(reverse());

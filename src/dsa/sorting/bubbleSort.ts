export const bubbleSort = (arr: number[]) => {
  let isSwapped: boolean;

  do {
    isSwapped = false;

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]];
        isSwapped = true;
      }
    }
  } while (isSwapped);

  return arr;
};

console.log(bubbleSort([3, 7, 1, 8, 5, 2, 6, 4]));
